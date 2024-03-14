import { generateState } from "arctic"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import { createGitHubOAuthProvider } from "~/server/auth_providers/github"

export type LoginRouteResponse = {
  redirect_url: string
}

export async function GET(request: NextRequest) {
  const redirect_uri = request.nextUrl.searchParams.get("redirect_uri")
  const github = createGitHubOAuthProvider(
    typeof redirect_uri === "string" ?
      decodeURIComponent(redirect_uri)
    : undefined,
  )
  const state = generateState()
  const url = await github.createAuthorizationURL(state)

  cookies().set("github_oauth_state", state, {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
  })

  return NextResponse.json({ redirect_url: url.toString() }, { status: 200 })
}
