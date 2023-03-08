import type { MarkdownInstance, MDXInstance } from "astro";
import type { Frontmatter } from "../../types/frontmatter";
import { getSlug } from "../../utils/blog";

export default function PostCard({
  post,
}: {
  post: MarkdownInstance<Frontmatter>;
}): JSX.Element {
  const { frontmatter }: { frontmatter: Frontmatter } = post;
  const slug = getSlug(post.file);
  const postUrl = `/blog/${slug}`;

  return (
    <div className="my-10 sm:my-5 px-10">
      <h2 className="text-xl font-bold text-white">
        <a href={postUrl}>{frontmatter.title}</a>
      </h2>
      <div className="my-2"></div>
      <p className="text-white-300 text-m">{frontmatter.description}</p>
      <div className="my-2"></div>
      <div className="flex flex-row items-center gap-1 text-sm text-slate-300">
        <p className="">{frontmatter.publishedAt}</p>
      </div>
      <hr className="my-5 sm:my-5 h-px border-0 bg-gray-200" />
    </div>
  );
}
