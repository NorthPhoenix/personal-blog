"use client"
import { login } from "~/server/actions"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"

const RSCSignInButton: React.FC<{
  className?: string
  children?: React.ReactNode
}> = ({ className, children }) => {
  const redirect_uri = usePathname()
  const [loading, setLoading] = useState(false)
  return (
    <Button
      className={className}
      variant={"outline"}
      onClick={() => {
        setLoading(true)
        void login(redirect_uri)
      }}
    >
      {loading ?
        <span className="loading translate-y-1" />
      : children ?? "Login"}
    </Button>
  )
}

export default RSCSignInButton
