"use client"
import React, { useEffect, useState } from "react"
import { type ButtonProps, Button } from "../ui/button"
import { HeartIcon } from "lucide-react"
import { cn } from "~/lib/utils"
import { useAuth } from "~/lib/hooks/useAuth"
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import { getBlogLikeCount, likePost } from "~/server/actions"
import { Skeleton } from "../ui/skeleton"
import { useDebounce } from "~/lib/hooks/useDebounce"

const LikeButton: React.FC<{ slug: string } & ButtonProps> = ({
  slug,
  className,
  ...props
}) => {
  const queryClient = useQueryClient()

  const [clientData, setClientData] = useState<{
    likeCount: number
    likedByUser: boolean
  } | null>(null)

  const debouncedClientData = useDebounce(clientData, 1000)

  const { data: authData } = useAuth()

  function blogLikeCountOptions() {
    return queryOptions({
      queryKey: ["blogLikeCount", slug, authData?.user.id],
      queryFn: () => getBlogLikeCount(slug, authData?.user.id),
    })
  }

  const {
    data: serverData,
    isPending,
    isError,
    refetch,
  } = useQuery(blogLikeCountOptions())

  const mutation = useMutation({
    mutationKey: ["likeBlog", slug, authData?.user.id],
    mutationFn: ({
      userId,
      action,
    }: {
      userId: string
      action: "like" | "dislike"
    }) => likePost(slug, userId, action),
    onMutate: async (variables) => {
      console.log("onMutate: ", ["likeBlog", slug, authData?.user.id])
      console.log("variables: ", variables)
      console.log("clientData: ", clientData)
      console.log("debouncedClientData: ", debouncedClientData)
      console.log("serverData: ", serverData)
    },
    onSuccess: async (_, variables) => {
      if (isPending) {
        await refetch()
        return
      }
      queryClient.setQueryData(blogLikeCountOptions().queryKey, (prev) => {
        if (!prev) {
          return undefined
        }
        return {
          likedByUser: variables.action === "like" ? true : false,
          likeCount:
            variables.action === "like" ?
              prev.likeCount + 1
            : prev.likeCount - 1,
        }
      })
    },
  })

  useEffect(() => {
    if (!serverData || !debouncedClientData) {
      return
    }
    if (!authData?.user.id) {
      return
    }
    if (debouncedClientData.likedByUser === serverData.likedByUser) {
      return
    }
    if (mutation.isPending) {
      return
    }
    mutation.mutate({
      userId: authData.user.id,
      action: debouncedClientData.likedByUser ? "like" : "dislike",
    })
  }, [debouncedClientData, authData?.user.id])

  useEffect(() => {
    if (serverData) {
      setClientData(serverData)
    }
  }, [serverData])

  if (isError) {
    return null
  }
  return (
    <Button
      variant={"outline"}
      {...props}
      disabled={!authData?.user.id}
      onClick={() => {
        setClientData((prev) =>
          !!prev ?
            {
              likeCount: prev.likeCount + (prev.likedByUser ? -1 : 1),
              likedByUser: !prev.likedByUser,
            }
          : null,
        )
      }}
      className={cn(
        className,
        "flex h-fit flex-row items-center gap-2 border-neutral-600 text-lg",
      )}
    >
      <HeartIcon
        className={cn("h-10 w-10", clientData?.likedByUser && "fill-nier-200")}
      />
      {isPending || !clientData ?
        <Skeleton className="h-6 w-12" />
      : <span>{clientData.likeCount}</span>}
    </Button>
  )
}

export default LikeButton
