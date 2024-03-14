"use client"

import { forwardRef, type ComponentPropsWithoutRef, useEffect } from "react"
import { Button } from "./ui/button"
import { useQuery, useQueryClient } from "@tanstack/react-query"

const SignOutButton = forwardRef<
  typeof Button,
  ComponentPropsWithoutRef<typeof Button>
>(({ children, ...props }, _) => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["logout"],
    enabled: false,
    queryFn: async () =>
      fetch("/api/logout", { method: "GET" }).then((res) => {
        if (!res.ok) {
          throw new Error(`Error logging out: ${res.statusText}`)
        }
        return "logged out successfully"
      }),
  })

  useEffect(() => {
    if (isLoading || !data) return
    if (isError) {
      console.error(error)
      return
    }
    console.log("revalidating auth and login queries after logout")
    queryClient
      .invalidateQueries({
        queryKey: ["login"],
        exact: true,
        refetchType: "none",
      })
      .then(() => {
        queryClient.setQueryData(["validateAuth"], {
          user: null,
          session: null,
        })
      })
      .catch((error) => {
        console.error("Error resetting client queries: ", error)
      })
  }, [isError, isLoading])

  return (
    <Button
      {...props}
      onClick={async () => {
        void refetch()
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
