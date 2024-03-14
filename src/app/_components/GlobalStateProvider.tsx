"use client"

import { atom, useSetAtom } from "jotai"
import { type ReactNode, useLayoutEffect } from "react"

export const isMobileAtom = atom(false)

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const isMobileSet = useSetAtom(isMobileAtom)
  useLayoutEffect(() => {
    // Determine if user is on mobile and set appropriate state
    const isMobile = window.innerWidth < 768
    isMobileSet(isMobile)
  }, [])
  return <>{children}</>
}

export default GlobalStateProvider
