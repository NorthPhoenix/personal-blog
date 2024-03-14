import { createClient } from "@libsql/client"
import { env } from "~/env.mjs"

export default createClient({
  url: env.DB_URL,
  authToken:
    process.env.NODE_ENV == "production" ? env.DB_AUTH_TOKEN : undefined,
})
