import fs from "fs";
import path from "path";
import matter from "gray-matter";
import hljs from "highlight.js";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { ArticleMetadata } from "@/lib/types";
import { renderMarkdownWithIds } from "@/lib/utils";
import { TableOfContent } from "@/components/table-of-content";
import Footer from "@/components/footer";
import "highlight.js/styles/night-owl.min.css";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("articles"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("articles", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const cleanedContent = renderMarkdownWithIds(content);

  return {
    props: {
      metadata: {
        ...frontmatter,
        slug,
      },
      content: cleanedContent,
    },
  };
}

const DetailArticle = ({
  metadata,
  content,
}: {
  metadata: ArticleMetadata;
  content: string;
}) => {
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      <section className="wrapper pt-8 pb-20">
        <div className="pb-8">
          <motion.h1
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.75,
            })}
            initial="initial"
            animate="enter"
            className="text-white font-extrabold text-4xl"
          >
            {metadata.title}
          </motion.h1>
          <motion.p
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.9,
            })}
            initial="initial"
            animate="enter"
            className="text-[#c7c7c7] mt-3"
          >
            Written on {metadata.date} by Daffa Azhar
          </motion.p>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 1.05,
            })}
            initial="initial"
            animate="enter"
            className="mt-4 flex items-center gap-x-2"
          >
            {metadata.tags.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className="px-3 py-1 text-sm rounded-full font-medium"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.hr
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.2,
          })}
          initial="initial"
          animate="enter"
        />
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.35,
          })}
          initial="initial"
          animate="enter"
          className="pt-8 lg:grid lg:grid-cols-[auto,250px] lg:gap-8"
        >
          <div
            className="text-[#d1d5db] content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
          <TableOfContent />
        </motion.div>
      </section>
      <motion.div
        variants={{
          initial: {
            opacity: 0,
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 1.85,
            },
          },
        }}
        initial="initial"
        animate="enter"
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default DetailArticle;
