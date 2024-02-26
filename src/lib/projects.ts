import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { ProjectMetadata } from "./types";

export function getProjects(limit?: number) {
  const files = fs.readdirSync(path.join("projects"));

  let metadatas: ProjectMetadata[] = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("projects", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      image: frontmatter.image,
      title: frontmatter.title,
      overview: frontmatter.overview,
      techStacks: frontmatter.techStacks,
      slug,
    };
  });

  // If limit is defined, return only up to the limit
  if (limit) {
    metadatas = metadatas.slice(0, limit);
  }

  return metadatas;
}
