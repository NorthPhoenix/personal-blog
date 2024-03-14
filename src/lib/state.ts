import { atom } from "jotai"

// loading states
export const homeLoadedAtom = atom<boolean>(false)
export const heroLoadedAtom = atom<boolean>(false)
export const skillsLoadedAtom = atom<boolean>(false)

type ScreenSizeType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | null
// screen size atom
export const screenSizeAtom = atom<ScreenSizeType>(null)

// the number of projects displayed in project section on small/medium/large screens
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_SMALL_SCREEN = 3
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_MEDIUM_SCREEN = 4
const INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_LARGE_SCREEN = 6
export const initialProjectDisplayedCountAtom = atom<number>((get) => {
  const screenSize = get(screenSizeAtom)
  switch (screenSize) {
    case "xs":
    case "sm":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_SMALL_SCREEN
    case "md":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_MEDIUM_SCREEN
    case "lg":
    case "xl":
    case "2xl":
      return INITIAL_MAX_PROJECT_DISPLAYED_COUNT_ON_LARGE_SCREEN
    default:
      return 0
  }
})

// does the navbar blur things behind it
export const isNavBlurredAtom = atom<boolean>(false)
