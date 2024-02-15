import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firaCode } from "@/lib/fonts";
import { fadeIn } from "@/lib/motion";
import { OverviewCard } from "@/components/ui/overview-card";

const DATAS = [
  {
    title: "Web Developer",
    image: "",
  },
  {
    title: "Web Developer",
    image: "",
  },
  {
    title: "Web Developer",
    image: "",
  },
  {
    title: "Web Developer",
    image: "",
  },
];

export default function Overview() {
  const { ref, inView } = useInView({
    threshold: 0.25,
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
        Introduction
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
        Overview.
      </motion.h2>
      <motion.p
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.45,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="max-w-2xl text-[#c7c7c7] leading-relaxed mt-4"
      >
        I&apos;m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I&apos;m a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let&apos;s work together to bring your ideas to
        life!
      </motion.p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DATAS.map((data, index) => (
          <OverviewCard key={index} index={index} inView={inView} data={data} />
        ))}
      </div>
    </section>
  );
}
