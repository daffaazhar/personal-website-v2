import { motion } from "framer-motion";
import { ArticleMetadata } from "@/lib/types";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const ArticleCard = ({ data }: { data: ArticleMetadata }) => {
  return (
    <Tilt
      perspective={2500}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="rgba(45, 72, 152, 0.75)"
      glarePosition="all"
      glareBorderRadius="20px"
      transitionSpeed={2000}
    >
      <Link href={`/articles/${data.slug}`}>
        <motion.div className="flex md:flex-row flex-col gap-4 p-4 rounded-2xl border border-white bg-glassmorphism h-full">
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <div className="flex gap-x-2">
                {data.tags.map((tag, index) => {
                  return (
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
                  );
                })}
              </div>
              <h4 className="font-bold text-2xl mt-3 text-white">
                {data.title}
              </h4>
              <p className="mt-1 font-normal text-[#c7c7c7]">{data.overview}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </Tilt>
  );
};

export { ArticleCard };
