import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firaCode } from "@/lib/fonts";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import "devicon/devicon.min.css";

const DATAS = [
  {
    image: "/projects/duitkiddo.png",
    title: "Duit Kiddo",
    description:
      "A banking app built to help parents teach their children about financial literacy and responsibility.",
    icons: ["devicon-flutter-plain", "devicon-nextjs-plain"],
  },
  {
    image: "/projects/duitkiddo.png",
    title: "EduCode",
    description:
      "Information & Tech online course website. Built for ITCC 2021 Udayana University.",
    icons: ["devicon-flutter-plain", "devicon-nextjs-plain"],
  },
];

const FeaturedProject = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative wrapper py-36">
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
        Some projects that I&apos;m proud of
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
        Featured Projects.
      </motion.h2>
      <motion.div
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.45,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {DATAS.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </motion.div>
      <Button className="p-6 mt-4 bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 hover:bg-opacity-20 hover:bg-blue-200">
        See All Projects
      </Button>
    </section>
  );
};

export default FeaturedProject;
