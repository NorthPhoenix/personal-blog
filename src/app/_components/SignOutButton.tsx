"use client"

import { forwardRef, type ComponentPropsWithoutRef, useState } from "react"
import { Button } from "./ui/button"
import { logout } from "~/server/actions"
import { useRouter } from "next/navigation"

const SignOutButton = forwardRef<
  typeof Button,
  ComponentPropsWithoutRef<typeof Button>
>(({ children, ...props }, _) => {
  const [isLoading, setIsloading] = useState(false)
  const router = useRouter()
  return (
    <Button
      {...props}
      onClick={async () => {
        setIsloading(true)
        logout()
          .then(() => {
            router.refresh()
          })
          .catch(() => {
            setIsloading(false)
            console.error("Failed to sign out")
          })
      }}
    >
      {isLoading ?
        <div className="flex w-full items-center justify-center">
          <span className="loading" />
        </div>
      : children}
    </Button>
  )
})

export default SignOutButton
