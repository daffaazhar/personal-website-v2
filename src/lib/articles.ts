import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { ArticleMetadata } from "./types";

export function getArticles(limit?: number) {
  const files = fs.readdirSync(path.join("articles"));

  let metadatas: ArticleMetadata[] = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("articles", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      ...frontmatter,
      slug,
    };
  });

  // Sort articles by date
  metadatas.sort((a, b) => (a.date < b.date ? 1 : -1));

  // If limit is defined, return only up to the limit
  if (limit) {
    metadatas = metadatas.slice(0, limit);
  }

  return metadatas;
}
