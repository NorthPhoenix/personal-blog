"use client"

import { useLayoutEffect } from "react"
import { useSetAtom } from "jotai"
import { screenSizeAtom } from "~/lib/state"

const ScreenBreakpointController = () => {
  const setScreenSize = useSetAtom(screenSizeAtom)

  // Set screen size state
  useLayoutEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth < 640) {
        setScreenSize("xs")
      } else if (windowWidth < 768) {
        setScreenSize("sm")
      } else if (windowWidth < 1024) {
        setScreenSize("md")
      } else if (windowWidth < 1280) {
        setScreenSize("lg")
      } else if (windowWidth < 1536) {
        setScreenSize("xl")
      } else {
        setScreenSize("2xl")
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return <div id="ScreenBreakpointController" className="sr-only"></div>
}

export default ScreenBreakpointController
