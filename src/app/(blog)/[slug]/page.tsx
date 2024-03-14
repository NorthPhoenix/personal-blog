import "~/styles/codeHighlights.css"
import Image from "next/image"
import { type Metadata } from "next"
import { type OstDocument } from "outstatic"
import markdownToHtml from "~/lib/markdownToHtml"
import { getDocumentSlugs, load } from "outstatic/server"
import { absoluteUrl } from "~/lib/utils"
import { notFound } from "next/navigation"
import DateFormatter from "~/app/_components/DateFormater"

type Post = {
  tags: { value: string; label: string }[]
} & OstDocument

interface PostParams {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: PostParams): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(`/blog/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage ?? "/images/blank.jpg"),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage ?? "/images/blank.jpg"),
    },
  }
}

export default async function Post(params: PostParams) {
  const post = await getData(params)
  return (
    <div className="mx-auto max-w-6xl px-5">
      <article className="pb-10">
        {Array.isArray(post?.tags) ?
          post.tags.map(({ label }) => (
            <span
              key="label"
              className="mb-2 mr-2 inline-block rounded-full bg-nier-300 px-3 py-1 text-sm font-semibold text-nier-700"
            >
              {label}
            </span>
          ))
        : null}
        <h1 className="w-full pb-3 text-center text-2xl font-bold sm:text-4xl md:pb-6 md:text-6xl">
          {post.title}
        </h1>
        <div className="relative mb-2 h-52 w-full sm:mx-0 md:mb-4 md:h-96">
          <Image
            alt={post.title}
            src={post?.coverImage ?? ""}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="mb-2 flex w-full flex-wrap items-start justify-between gap-x-2 md:mb-4">
          <div className="text-xs text-nier-400 md:text-base">
            Written on <DateFormatter dateTime={post.publishedAt} />
          </div>
          <div className="text-xs text-nier-400 md:text-base">
            by {post?.author?.name ?? ""}.
          </div>
        </div>
        <hr className="mb-10 mt-4 border-nier-700" />
        <div className="mx-auto max-w-4xl">
          <div
            className="prose w-full max-w-none text-nier-200 lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  )
}

async function getData({ params }: PostParams) {
  console.log("Loading outstatic blog data:")
  console.log(`\tSlug: ${params.slug}`)
  const blogDB = await load()

  const post = await blogDB
    .find<Post>({ collection: "blog", slug: params.slug }, [
      "title",
      "publishedAt",
      "description",
      "slug",
      "author",
      "content",
      "coverImage",
      "tags",
    ])
    .first()

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  return {
    ...post,
    content,
  }
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs("blog")
  return posts.map((slug) => ({ slug }))
}
