// "use client"
// import { useQuery } from "@tanstack/react-query"
// import { HeartIcon } from "lucide-react"
// import { getBlogLikeCount } from "~/server/actions"
// import { cn } from "~/lib/utils"
// import { Skeleton } from "../ui/skeleton"
// import { useAuth } from "~/lib/hooks/useAuth"

// type BlogLikeCountProps = {
//   slug: string
// } & React.HTMLAttributes<HTMLDivElement>

// const BlogLikeCount: React.FC<BlogLikeCountProps> = ({
//   slug,
//   className,
//   ...props
// }) => {
//   const { data: authData } = useAuth()
//   const { data, isPending, isError } = useQuery({
//     queryKey: ["blogLikeCount", slug, authData?.user.id],
//     queryFn: () => getBlogLikeCount(slug, authData?.user.id),
//   })
//   if (isError) {
//     return null
//   }
//   if (isPending) {
//     return (
//       <div
//         {...props}
//         className={cn("flex flex-row items-center gap-1 p-2", className)}
//       >
//         <Skeleton className="h-6 w-12" />
//       </div>
//     )
//   }

//   return (
//     <div
//       {...props}
//       className={cn(
//         "flex flex-row items-center gap-1 p-2 opacity-50 duration-500 animate-in fade-in",
//         className,
//       )}
//     >
//       <HeartIcon className={data.likedByUser ? "fill-current" : ""} />
//       <span>{data.likeCount}</span>
//     </div>
//   )
// }

// export default BlogLikeCount
