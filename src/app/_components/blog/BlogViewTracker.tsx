"use client"

import { memo, useEffect } from "react"
import { incrementBlogViewCount } from "~/server/actions"

export default memo(function BlogViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    // console.log("Tracking blog view for", slug)
    // Track the blog view
    const blogViewsLS = localStorage.getItem("blog_views")
    if (!blogViewsLS) {
      // console.log("No blog views found in local storage, tracking blog view.")
      incrementBlogViewCount(slug)
        .then((_) => {
          // console.log("Tracked blog view response: ", res)
          localStorage.setItem("blog_views", JSON.stringify([slug]))
        })
        .catch(console.error)
      return
    }
    //console.log("Found blog views in local storage, checking if blog view is already tracked.",)
    const blogViews = JSON.parse(blogViewsLS) as string[]
    if (!blogViews.includes(slug)) {
      // console.log("Blog view not tracked, tracking blog view.")
      incrementBlogViewCount(slug)
        .then((_) => {
          // console.log("Tracked blog view response: ", res)
          blogViews.push(slug)
          localStorage.setItem("blog_views", JSON.stringify(blogViews))
        })
        .catch(console.error)
    }
  }, [slug])
  return null
})
