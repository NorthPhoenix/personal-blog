import { atom } from "jotai"

type ScreenSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | null
// screen size atom
export const screenSizeAtom = atom<ScreenSizeType>(null)
