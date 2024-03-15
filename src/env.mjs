import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    OST_GITHUB_ID: z.string().min(1),
    OST_GITHUB_SECRET: z.string().min(1),
    OST_TOKEN_SECRET: z.string().min(1),
    OST_REPO_SLUG: z.string().min(1),
    DB_URL: z.string().min(1),
    DB_AUTH_TOKEN: z.string().min(1),
    AUTH_GITHUB_CLIENT_SECRET: z.string().min(1),
    AUTH_GITHUB_CLIENT_ID: z.string().min(1),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
  },
  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    OST_GITHUB_ID: process.env.OST_GITHUB_ID,
    OST_GITHUB_SECRET: process.env.OST_GITHUB_SECRET,
    OST_TOKEN_SECRET: process.env.OST_TOKEN_SECRET,
    OST_REPO_SLUG: process.env.OST_REPO_SLUG,
    DB_URL: process.env.DB_URL,
    DB_AUTH_TOKEN: process.env.DB_AUTH_TOKEN,
    AUTH_GITHUB_CLIENT_SECRET: process.env.AUTH_GITHUB_CLIENT_SECRET,
    AUTH_GITHUB_CLIENT_ID: process.env.AUTH_GITHUB_CLIENT_ID,
  },
});