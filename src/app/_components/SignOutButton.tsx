"use client"

import { forwardRef, type ComponentPropsWithoutRef, useState } from "react"
import { Button } from "./ui/button"
import { logout } from "~/server/actions"

const SignOutButton = forwardRef<
  typeof Button,
  ComponentPropsWithoutRef<typeof Button>
>(({ children, ...props }, _) => {
  const [isLoading, setIsloading] = useState(false)

  return (
    <Button
      {...props}
      onClick={async () => {
        setIsloading(true)
        void logout()
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
