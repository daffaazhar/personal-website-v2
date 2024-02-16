import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { ProjectMetadata } from "@/lib/types";
import { techStackData } from "@/lib/data";

const ProjectCard = ({ data }: { data: ProjectMetadata }) => {
  return (
    <Tilt
      perspective={1000}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor="rgba(45, 72, 152, 0.75)"
      glarePosition="all"
      glareBorderRadius="20px"
      transitionSpeed={2000}
    >
      <Link href={`projects/${data.slug}`}>
        <motion.div
          className="rounded-2xl border border-white overflow-hidden p-4 flex flex-col h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
          }}
        >
          <Image
            src={data.image}
            alt={data.title}
            width={300}
            height={300}
            className="rounded-xl w-full"
          />
          <h3 className="font-bold text-lg text-white mt-4">{data.title}</h3>
          <p className="text-[#c7c7c7] mt-1">{data.overview}</p>
          <div className="mt-4 flex items-end gap-3 flex-grow">
            {data.techStacks.map((techStack: string, index: number) => {
              return (
                <i
                  key={`icon-${index}`}
                  className={`${techStackData[techStack]} text-2xl text-white`}
                ></i>
              );
            })}
          </div>
        </motion.div>
      </Link>
    </Tilt>
  );
};

export { ProjectCard };
