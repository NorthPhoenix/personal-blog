import "~/styles/globals.css"
import "~/styles/portfolio.css"
import JotaiProvider from "~/app/_components/JotaiProvider"
import GlobalStateProvider from "~/app/_components/GlobalStateProvider"
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "~/app/_components/blog//Footer"
import Header from "~/app/_components/blog/Header"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


// load fonts
import localFont from "next/font/local"

const exodus_regular = localFont({
  src: "../../../public/fonts/ExodusDemo-Regular.otf",
  display: "swap",
  variable: "--font-exodus-regular",
})
const exodus_sharpen = localFont({
  src: "../../../public/fonts/ExodusDemo-Sharpen.otf",
  display: "swap",
  variable: "--font-exodus-sharpen",
})
const exodus_stencil = localFont({
  src: "../../../public/fonts/ExodusDemo-Stencil.otf",
  display: "swap",
  variable: "--font-exodus-stencil",
})
const exodus_striped = localFont({
  src: "../../../public/fonts/ExodusDemo-Striped.otf",
  display: "swap",
  variable: "--font-exodus-striped",
})

import { type Metadata } from "next"
import ReactQueryProvider from "../_components/ReactQueryProvider"
import ScreenBreakpointController from "../_components/ScreenBreakpointController"

export const metadata: Metadata = {
  title: {
    absolute: "Nikita's Blog",
    template: "%s | Nikita's Blog",
  },
  description: "A blog for random cool stuff.",
  metadataBase: new URL(
    process.env.NODE_ENV === "production" ?
      "https://blog.nikitaistomin.com"
    : "http://localhost:3000",
  ),
  generator: "Next.js",
  authors: { name: "Nikita Istomin" },
  applicationName: "Nikita Istomin Blog Website",
  creator: "Nikita Istomin",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Nikita's Blog",
    description:
      "A blog for random cool stuff built with Next.js and Outstatic.",
    locale: "en_US",
    type: "website",
  },
  icons: "/icon.svg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${exodus_regular.variable} ${exodus_sharpen.variable} ${exodus_stencil.variable} ${exodus_striped.variable}`}
    >
      <body
        className={
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }
      >
        <ReactQueryProvider>
          <JotaiProvider>
            <GlobalStateProvider>
              <div className="min-h-[100dvh] overscroll-none bg-neutral-900 text-nier-200">
                <Header />
                <main className="min-h-[80vh]">{children}</main>
                <Footer />
              </div>
              <ReactQueryDevtools initialIsOpen={false} />
              <ScreenBreakpointController />
            </GlobalStateProvider>
          </JotaiProvider>
        </ReactQueryProvider>
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  )
}
