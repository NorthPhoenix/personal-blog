import { load } from "outstatic/server"
import type { OstDocument } from "outstatic"
import Link from "next/link"
import Image from "next/image"
import BlogViewCount from "~/app/_components/blog/BlogViewCount"
import BlogLikeCount from "~/app/_components/blog/BlogLikeCount"

export default async function Page() {
  const { allPosts } = await getData()

  return (
    <div className="mx-auto max-w-6xl px-5">
      <h1 className="animate-fade-right py-10 text-5xl font-bold leading-tight tracking-tighter animate-delay-300 animate-duration-[1500ms] animate-ease-in-out md:text-6xl">
        My Blog
      </h1>
      {allPosts.length > 0 && <ContentGrid items={allPosts} priority />}
    </div>
  )
}

async function getData() {
  console.log("Loading outstatic blog data:")
  console.log("\tSlug: /")
  const blogDB = await load()

  const allPosts = await blogDB
    .find({ collection: "blog" }, [
      "title",
      "publishedAt",
      "slug",
      "coverImage",
      "description",
    ])
    .sort({ publishedAt: -1 })
    .toArray()

  return {
    allPosts,
  }
}

type Item = {
  tags?: { value: string; label: string }[]
} & OstDocument

type ContentGridProps = {
  items: Item[]
  priority?: boolean
}

const ContentGrid = ({ items, priority = false }: ContentGridProps) => {
  return (
    <section>
      <div className="stagger-delta-100 animate-delay-stagger mb-8 grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
        {items.map((item, id) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            style={{ "--animation-order": id } as React.CSSProperties} // for staggered animation
            className="scale-100 animate-fade-right cursor-pointer overflow-hidden rounded-md border border-nier-700 transition duration-100 !animate-duration-700 hover:scale-[1.02] hover:shadow active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 md:w-full"
          >
            <div className="relative select-none sm:mx-0">
              <BlogViewCount
                slug={item.slug}
                className="absolute left-0 top-0 px-3 py-2"
              />
              <BlogLikeCount
                slug={item.slug}
                className="absolute right-0 top-0 px-3 py-2"
              />
              <Image
                src={item.coverImage ?? ""}
                alt={`Cover Image for ${item.title}`}
                className="h-auto w-full object-cover object-center"
                width={0}
                height={0}
                sizes="(min-width: 768px) 347px, 192px"
                priority={priority && id <= 2}
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 text-xl font-bold leading-snug hover:underline">
                {item.title}
              </h3>
              <div className="text-md mb-4 text-slate-700"></div>
              <p className="mb-4 text-lg leading-relaxed">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
