"use client"

import UserIcon from "./UserIcon"
import { useAuth } from "~/lib/hooks/useAuth"
import { Skeleton } from "../ui/skeleton"
import SignInButton from "../SignInButton"

const AuthIndicator = () => {
  const { data, isLoading, isError, error, isRedirecting } = useAuth()
  if (isLoading || isRedirecting) {
    return <Skeleton className="h-10 w-10 rounded-full" />
  }
  if (isError) {
    console.error("Error loading auth", error)
    return <span className="text-lg text-red-600">Error</span>
  }
  if (!data) {
    error
  }
  return (
    <>
      {!!data ?
        <UserIcon user={data.user} />
      : <SignInButton size={"lg"} variant={"outline"}>
          Sign In
        </SignInButton>
      }
    </>
  )
}

export default AuthIndicator
