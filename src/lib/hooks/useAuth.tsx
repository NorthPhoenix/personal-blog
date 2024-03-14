"use client"
import { usePathname } from "next/navigation"
import type { LoginRouteResponse } from "~/app/api/(auth)/login/route"
import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { validateAuth } from "~/server/actions"
import type { AuthData } from "~/server/auth"

type UseAuthReturnType =
  | {
      data: undefined
      isLoading: false
      isError: false
      isRedirecting: true
      error: null
      login: undefined
    }
  | {
      data: undefined
      isLoading: true
      isRedirecting: false
      isError: false
      error: null
      login: undefined
    }
  | {
      data: undefined
      isLoading: false
      isRedirecting: false
      isError: true
      error: Error
      login: undefined
    }
  | {
      data: AuthData
      isLoading: false
      isRedirecting: false
      isError: false
      error: null
      login: undefined
    }
  | {
      data: undefined
      isLoading: false
      isRedirecting: false
      isError: false
      error: null
      login: () => Promise<unknown>
    }
  | {
      data: undefined
      isLoading: false
      isRedirecting: false
      isError: true
      error: Error
      login: () => Promise<unknown>
    }

export function useAuth(): UseAuthReturnType {
  const pathname = usePathname()
  const router = useRouter()

  const {
    data: validateData,
    isError: validateIsError,
    isLoading: validateIsLoading,
    error: validateError,
  } = useQuery({
    queryKey: ["validateAuth"],
    queryFn: () => validateAuth(),
  })

  const {
    data: loginData,
    isError: loginIsError,
    isLoading: loginIsLoading,
    error: loginError,
    refetch: loginFetch,
  } = useQuery({
    queryKey: ["login"],
    enabled: false,
    queryFn: () =>
      fetch(`/api/login?redirect_uri=${encodeURIComponent(pathname)}`).then(
        (res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch")
          }
          return res.json() as unknown as Promise<LoginRouteResponse>
        },
      ),
  })

  useEffect(() => {
    if (loginData) {
      router.push(loginData.redirect_url)
    }
  }, [loginData])

  if (loginData) {
    return {
      data: undefined,
      isLoading: false,
      isError: false,
      isRedirecting: true,
      error: null,
      login: undefined,
    }
  }

  if (validateIsLoading || loginIsLoading) {
    return {
      data: undefined,
      isLoading: true,
      isRedirecting: false,
      isError: false,
      error: null,
      login: undefined,
    }
  }
  if (validateIsError) {
    return {
      data: undefined,
      isLoading: false,
      isRedirecting: false,
      isError: true,
      error: validateError,
      login: undefined,
    }
  }
  if (validateData?.user) {
    return {
      data: validateData,
      isLoading: false,
      isRedirecting: false,
      isError: false,
      error: null,
      login: undefined,
    }
  }
  if (loginIsError) {
    return {
      data: undefined,
      isLoading: false,
      isRedirecting: false,
      isError: true,
      error: loginError,
      login: loginFetch,
    }
  }
  return {
    data: undefined,
    isLoading: false,
    isRedirecting: false,
    isError: false,
    error: null,
    login: loginFetch,
  }
}
