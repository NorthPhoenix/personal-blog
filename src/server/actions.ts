"use server"
import { generateState } from "arctic"
import { createGitHubOAuthProvider } from "~/server/auth_providers/github"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { lucia, validateRequest } from "src/server/auth"
import db from "./db"
import type { InStatement } from "@libsql/client"
import { env } from "~/env.mjs"
import { revalidatePath } from "next/cache"

interface LogoutActionResult {
  error: string | null
}

export async function likePost(
  slug: string,
  userId: string,
  action: "like" | "dislike",
): Promise<{ success: boolean }> {
  if (action !== "like" && action !== "dislike") {
    throw new Error("Invalid action")
  }
  let result
  if (action === "like") {
    result = await db.execute({
      sql: "INSERT INTO like (blog_id, user_id) VALUES ((SELECT id FROM blog WHERE slug = ?), ?)",
      args: [slug, userId],
    })
  } else {
    result = await db.execute({
      sql: "DELETE FROM like WHERE blog_id = (SELECT id FROM blog WHERE slug = ?) AND user_id = ?",
      args: [slug, userId],
    })
  }
  if (result.rowsAffected === 0) {
    throw new Error(`Failed to ${action} post`)
  }
  return { success: true }
}

export async function getBlogLikeCount(
  slug: string,
  useId?: string,
): Promise<{ likeCount: number; likedByUser: boolean }> {
  const sqlQueries: InStatement[] = [
    {
      sql: 'SELECT COUNT(*) AS count FROM "like" INNER JOIN blog ON "like".blog_id = blog.id WHERE slug = ?',
      args: [slug],
    },
  ]
  if (useId) {
    sqlQueries.push({
      sql: 'SELECT * FROM "like" WHERE blog_id = (SELECT id FROM blog WHERE slug = ?) AND user_id = ?',
      args: [slug, useId],
    })
  }
  const queryResults = await db.batch(sqlQueries, "read")
  let likeCount = Number(queryResults[0]?.rows[0]?.count)
  if (isNaN(likeCount)) {
    likeCount = 0
  }
  const likedByUser =
    queryResults[1]?.rows.length !== undefined &&
    queryResults[1]?.rows.length > 0

  return { likeCount, likedByUser }
}

export async function getBlogViewCount(slug: string): Promise<number> {
  const result = await db.execute({
    sql: "SELECT view_count FROM blog WHERE slug = ?",
    args: [slug],
  })
  const value = result.rows[0]?.view_count

  if (value === undefined || value === null) {
    return 0
  }

  return (
    typeof value === "number" ? value
    : typeof value === "string" ? parseInt(value)
    : Number(value)
  )
}

export async function incrementBlogViewCount(slug: string) {
  const updateResult = await db.execute({
    sql: "UPDATE blog SET view_count = view_count + 1 WHERE slug = ?",
    args: [slug],
  })
  if (updateResult.rowsAffected === 0) {
    // Blog post not found
    // Create a new blog post with the slug and view count of 1
    const blogCreationResult = await db.execute({
      sql: "INSERT INTO blog (slug, view_count) VALUES (?, 1)",
      args: [slug],
    })
    if (blogCreationResult.rowsAffected === 0) {
      throw new Error("Failed to create blog post")
    }
  }
  return { success: true }
}

export async function login(redirect_uri?: string) {
  const github = createGitHubOAuthProvider(redirect_uri)
  const state = generateState()
  const url = await github.createAuthorizationURL(state)

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  })
  revalidatePath("/", "layout")
  return redirect(url.toString())
}

export async function logout(): Promise<LogoutActionResult> {
  const { session } = await validateRequest()
  if (!session) {
    return {
      error: "Unauthorized",
    }
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  revalidatePath("/", "layout")
  return {
    error: null,
  }
}

export async function validateAuth() {
  return await validateRequest()
}
