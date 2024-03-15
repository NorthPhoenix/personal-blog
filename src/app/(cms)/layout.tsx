import "~/styles/globals.css"
import "~/styles/cms.css"

import { type Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ?
      "https://www.nikitaistomin.com"
    : "http://localhost:3000",
  ),
  title: "Nikta Istomin",
  description: "Come see what I do!",
  generator: "Next.js",
  authors: { name: "Nikita Istomin" },
  creator: "Nikita Istomin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
