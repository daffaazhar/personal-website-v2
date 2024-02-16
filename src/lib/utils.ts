import { marked } from "marked";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { techStackData } from "@/lib/data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const renderMarkdownWithIds = (markdownContent: string) => {
  const renderer = new marked.Renderer();

  renderer.heading = function (text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
    return `<h${level} id="${escapedText}">${text}</h${level}>`;
  };

  return marked(markdownContent, { renderer });
};
