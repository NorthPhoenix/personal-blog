import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { lucia, validateRequest } from "~/server/auth"

export async function GET(): Promise<NextResponse> {
  const { session } = await validateRequest()
  if (!session) {
    // Unauthorized
    return new NextResponse(null, {
      status: 401,
    })
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  )
  return new NextResponse(null, {
    status: 204,
  })
}
