import { type Session, type User, Lucia } from "lucia"
import { cookies } from "next/headers"
import { cache } from "react"
import { LibSQLAdapter } from "@lucia-auth/adapter-sqlite"
import { webcrypto } from "node:crypto"
import db from "./db"

export type AuthData = {
  user: User
  session: Session
}

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
    DatabaseSessionAttributes: DatabaseSessionAttributes
  }
}

interface DatabaseUserAttributes {
  github_id: number
  username: string
  name: string
  avatar_url: string
  admin: boolean
  ec2_authorized: boolean
}

interface DatabaseSessionAttributes {}

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as Crypto
}

const adapter = new LibSQLAdapter(db, {
  user: "user",
  session: "session",
})

/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call */
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      github_id: attributes.github_id,
      username: attributes.username,
      name: attributes.name,
      avatar_url: attributes.avatar_url,
      admin: attributes.admin,
      ec2_authorized: attributes.ec2_authorized,
    }
  },
  getSessionAttributes: (_) => {
    return {
      // attributes has the type of DatabaseSessionAttributes
    }
  },
})

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
    if (!sessionId) {
      return {
        user: null,
        session: null,
      }
    }

    const result = await lucia.validateSession(sessionId)
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id)
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        )
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        )
      }
    } catch {}
    return result
  },
)
