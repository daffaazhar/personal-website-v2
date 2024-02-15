import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { ProjectMetadata } from "@/lib/types";
import { getIconByTechStack, renderMarkdownWithIds } from "@/lib/utils";
import { TableOfContent } from "@/components/table-of-content";
import Footer from "@/components/footer";
import Image from "next/image";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("projects"));

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
    path.join("projects", slug + ".md"),
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

const DetailProject = ({
  metadata,
  content,
}: {
  metadata: ProjectMetadata;
  content: string;
}) => {
  return (
    <>
      <section className="wrapper pt-4 pb-20">
        <div className="pb-8">
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.75,
            })}
            initial="initial"
            animate="enter"
          >
            <Image
              src={metadata.image}
              width={750}
              height={250}
              alt={metadata.title}
              className="w-full rounded-2xl h-96 object-cover"
            />
          </motion.div>
          <motion.h1
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.9,
            })}
            initial="initial"
            animate="enter"
            className="text-white font-extrabold text-4xl mt-4"
          >
            {metadata.title}
          </motion.h1>
          <motion.p
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 1.05,
            })}
            initial="initial"
            animate="enter"
            className="text-[#c7c7c7] mt-3"
          >
            Written on {metadata.title} by Daffa Azhar
          </motion.p>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 1.2,
            })}
            initial="initial"
            animate="enter"
            className="mt-4 flex items-center gap-x-2"
          >
            {metadata.techStacks.map((techStack: string, index: number) => {
              return (
                <i
                  key={`icon-${index}`}
                  className={`${getIconByTechStack(
                    techStack
                  )} text-2xl text-white`}
                ></i>
              );
            })}
          </motion.div>
        </div>
        <motion.hr
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.35,
          })}
          initial="initial"
          animate="enter"
        />
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.5,
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
              delay: 2,
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

export default DetailProject;
