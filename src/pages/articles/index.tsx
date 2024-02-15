import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { getArticles } from "@/lib/articles";
import { ArticleMetadata } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { ArticleCard } from "@/components/ui/article-card";
import Footer from "@/components/footer";

export async function getStaticProps() {
  const metadatas = getArticles();

  return {
    props: {
      metadatas,
    },
  };
}

const Articles = ({ metadatas }: { metadatas: ArticleMetadata[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMetadatas = metadatas.filter((metadata) => {
    const searchContent = `${metadata.title} ${
      metadata.date
    } ${metadata.tags.join(" ")} ${metadata.overview}`.toLowerCase();
    return searchContent.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <section className="wrapper pt-8 pb-32">
        <div>
          <motion.h1
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.6,
            })}
            initial="initial"
            animate="enter"
            className="text-4xl text-white font-extrabold"
          >
            Articles
          </motion.h1>
          <motion.p
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.75,
            })}
            initial="initial"
            animate="enter"
            className="text-white mt-2"
          >
            Thoughts, mental models, and tutorials about front-end development.
          </motion.p>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.9,
            })}
            initial="initial"
            animate="enter"
          >
            <Input
              type="text"
              placeholder="Search something here..."
              className="mt-4 bg-transparent text-white border border-[#c7c7c7]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.05,
          })}
          initial="initial"
          animate="enter"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {filteredMetadatas.length > 0 ? (
            filteredMetadatas.map((metadata, index) => (
              <ArticleCard key={index} data={metadata} />
            ))
          ) : (
            <div className="flex justify-center items-center col-span-2">
              <p className="text-white text-center">
                Oops, your search doesn&apos;t seem to be found. Try to use
                other keywords.
              </p>
            </div>
          )}
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
              delay: 1.25,
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

export default Articles;
