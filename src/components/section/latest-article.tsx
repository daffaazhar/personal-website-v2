import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { firaCode } from "@/lib/fonts";
import { ArticleCard } from "@/components/ui/article-card";
import { ArticleMetadata } from "@/lib/types";

const LatestWriting = ({ metadatas }: { metadatas: ArticleMetadata[] }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative wrapper py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen bg-[rgba(45,72,152,0.75)] blur-[200px] -rotate-[53.13deg]"></div>
      <motion.p
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.15,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className={`${firaCode.className} text-white`}
      >
        Read insightful article here
      </motion.p>
      <motion.h2
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.3,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="font-black text-4xl lg:text-5xl text-white mt-2"
      >
        My Latest Writings.
      </motion.h2>
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "spring",
          duration: 1,
          delay: 0.45,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {metadatas.map((data, index) => (
          <ArticleCard key={index} data={data} />
        ))}
      </motion.div>
    </section>
  );
};

export default LatestWriting;
