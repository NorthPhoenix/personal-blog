import Logo from "~/app/_components/design/Logo"
import { twMerge } from "tailwind-merge"
import Link from "next/link"
import AuthIndicator from "./AuthIndicator"
import { Suspense } from "react"
import { Skeleton } from "../ui/skeleton"

type HeaderProps = {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <>
      <header>
        <div
          className={twMerge("flex w-full flex-col items-center", className)}
        >
          <nav className="flex h-16 w-[90%] max-w-7xl  flex-row items-center justify-between bg-transparent p-3 ease-in-out animate-delay-1000 sm:h-20 sm:p-4 md:h-24 md:p-6">
            <a
              href="/"
              className="group flex flex-row items-center gap-4 object-scale-down md:h-14"
            >
              <Logo className="h-8 w-auto fill-nier-200 transition-transform group-hover:scale-105 sm:h-12 md:h-14" />
              <div className="flex flex-col items-start">
                <h1 className="text-left font-exodus-striped text-base leading-6 text-nier-300 sm:text-xl">
                  Nikita Istomin
                </h1>
                <h2 className="font-helvetica text-xs leading-3 text-nier-400 sm:text-sm">
                  Full-stack Developer
                </h2>
              </div>
            </a>
            {/* <Suspense
              fallback={<Skeleton className="h-10 w-10 rounded-full" />}
            >
              <AuthIndicator />
            </Suspense> */}
          </nav>
          <div className="flex w-[90%] animate-nav-line-expand flex-row items-center justify-center gap-2 overflow-hidden">
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
            <span className="h-[2px] grow bg-nier-400" />
            <span className="h-[2px] w-[15px] grow-0 bg-nier-400" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
