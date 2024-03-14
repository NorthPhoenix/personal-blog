import { remark } from "remark"
import remarkHtml from "remark-html"
import { rehype } from "rehype"
import rehypeHighlight from "rehype-highlight"

export default async function markdownToHtml(markdown: string) {
  const html = await remark().use(remarkHtml).process(markdown)
  const result = await rehype().use(rehypeHighlight).process(html.toString())
  return result.toString()
}
