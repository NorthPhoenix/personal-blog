import { lucia } from "~/server/auth"
import { github } from "~/server/auth_providers/github"
import { cookies } from "next/headers"
import { OAuth2RequestError } from "arctic"
import { type User, generateId } from "lucia"
import db from "~/server/db"

export async function GET(
  request: Request,
  { params }: { params: { redirect_uri?: string[] } },
): Promise<Response> {
  // console.log("GET /api/login_callback/github/[[...redirect_uri]]")
  const url = new URL(request.url)
  // console.log("url", url)
  const code = url.searchParams.get("code")
  // console.log("code", code)
  const state = url.searchParams.get("state")
  // console.log("state", state)
  const storedState = cookies().get("github_oauth_state")?.value ?? null
  // console.log("storedState", storedState)
  // console.log("Validating data...")
  if (!code || !state || !storedState || state !== storedState) {
    // console.log("Invalid data")
    return new Response(null, {
      status: 400,
    })
  }
  // console.log("Data is valid")

  try {
    // console.log("Validating authorization code...")
    const tokens = await github.validateAuthorizationCode(code)
    // console.log("Authorization code is valid")
    // console.log("Fetching user data from GitHub...")
    const githubUserResponse = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`,
      },
    })
    const githubUser = (await githubUserResponse.json()) as GitHubUser
    // console.log("User data fetched", githubUser)

    // console.log("Checking if user exists in the database...")
    const userQueryResult = await db.execute({
      sql: "SELECT * FROM user WHERE github_id = ?",
      args: [githubUser.id],
    })

    const existingUser = userQueryResult.rows[0] as unknown as User | undefined
    // console.log("Received user data", existingUser)

    if (existingUser) {
      // console.log("User exists")
      const session = await lucia.createSession(existingUser.id, {})
      // console.log("Session created", session)
      const sessionCookie = lucia.createSessionCookie(session.id)
      // console.log("Session cookie created", sessionCookie)
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      )
      return new Response(null, {
        status: 302,
        headers: {
          Location:
            params.redirect_uri?.reduce(
              (prev, cur) => prev.concat(`${cur}/`),
              "/",
            ) ?? "/",
        },
      })
    }

    // console.log("User does not exist")
    const userId = generateId(15)
    // console.log("Creating user in the database...")
    await db.execute({
      sql: "INSERT INTO user (id, github_id, username, name, avatar_url) VALUES (?, ?, ?, ?, ?)",
      args: [
        userId,
        githubUser.id,
        githubUser.login,
        githubUser.name,
        githubUser.avatar_url,
      ],
    })

    const session = await lucia.createSession(userId, {})
    // console.log("Session created", session)
    const sessionCookie = lucia.createSessionCookie(session.id)
    // console.log("Session cookie created", sessionCookie)
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    )
    return new Response(null, {
      status: 302,
      headers: {
        Location:
          params.redirect_uri?.reduce(
            (prev, cur) => prev.concat(`${cur}/`),
            "/",
          ) ?? "/",
      },
    })
  } catch (e) {
    // the specific error message depends on the provider
    // console.error(e)
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      })
    }
    return new Response(null, {
      status: 500,
    })
  }
}

interface GitHubUser {
  id: string
  login: string
  name: string
  avatar_url: string
}
