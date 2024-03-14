"use client"
import { useQuery } from "@tanstack/react-query"
import { EyeIcon } from "lucide-react"
import { getBlogViewCount } from "~/server/actions"
import { cn } from "~/lib/utils"
import { Skeleton } from "../ui/skeleton"

type BlogViewCountProps = {
  slug: string
} & React.HTMLAttributes<HTMLDivElement>

const BlogViewCount: React.FC<BlogViewCountProps> = ({
  slug,
  className,
  ...props
}) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["blogViewCount", slug],
    queryFn: () => getBlogViewCount(slug),
  })
  if (isError) {
    return null
  }
  if (isPending) {
    return (
      <div
        {...props}
        className={cn("flex flex-row items-center gap-1 p-2", className)}
      >
        <Skeleton className="h-6 w-12" />
      </div>
    )
  }

  return (
    <div
      {...props}
      className={cn(
        "flex flex-row items-center gap-1 p-2 opacity-50 duration-500 animate-in fade-in",
        className,
      )}
    >
      <EyeIcon />
      <span>{data}</span>
    </div>
  )
}

export default BlogViewCount
