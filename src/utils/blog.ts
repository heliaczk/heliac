import type { MarkdownInstance } from "astro";
import readingTime from "reading-time";
import type { Frontmatter } from "../types/frontmatter";

export function getSlug(filePath: string): string {
  const slug = filePath.split("/").pop()?.split(".").shift();
  return slug!;
}

export function getReadingTime(content: string): string {
  return readingTime(content).text;
}

export function sortPostsByPublishDate(posts: MarkdownInstance<Frontmatter>[]) {
  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).valueOf() -
      new Date(a.frontmatter.publishedAt).valueOf()
  );
}
