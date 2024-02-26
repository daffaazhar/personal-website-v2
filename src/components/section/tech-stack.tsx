import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { firaCode } from "@/lib/fonts";
import { techStackData } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";

const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  const oddTechStacks = Object.entries(techStackData).filter(
    (_, index) => index % 2 !== 0
  );
  const evenTechStacks = Object.entries(techStackData).filter(
    (_, index) => index % 2 === 0
  );

  return (
    <section ref={ref} className="relative py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen bg-[rgba(45,72,152,0.75)] blur-[200px] -rotate-[53.13deg]"></div>
      <div className="wrapper ">
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
          Things I use to develop all my projects
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
          Tech Stack.
        </motion.h2>
      </div>
      <motion.div
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.45,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="mt-12 mx-auto w-full flex flex-col gap-y-4"
      >
        <Marquee direction="right" speed="slow">
          {oddTechStacks.map(([tech, icon]) => (
            <li
              className="max-w-full relative rounded-lg border flex-shrink-0 border-white px-4 py-2 bg-glassmorphism"
              key={tech}
            >
              <div className="flex gap-x-2">
                <i className={`${icon} text-2xl text-white`}></i>
                <span className="text-white">{tech}</span>
              </div>
            </li>
          ))}
        </Marquee>
        <Marquee direction="left" speed="slow">
          {evenTechStacks.map(([tech, icon]) => (
            <li
              className="max-w-full relative rounded-lg border flex-shrink-0 border-white px-4 py-2 bg-glassmorphism"
              key={tech}
            >
              <div className="flex gap-x-2">
                <i className={`${icon} text-2xl text-white`}></i>
                <span className="text-white">{tech}</span>
              </div>
            </li>
          ))}
        </Marquee>
        <Marquee direction="right" speed="normal">
          {oddTechStacks.map(([tech, icon]) => (
            <li
              className="max-w-full relative rounded-lg border flex-shrink-0 border-white px-4 py-2 bg-glassmorphism"
              key={tech}
            >
              <div className="flex gap-x-2">
                <i className={`${icon} text-2xl text-white`}></i>
                <span className="text-white">{tech}</span>
              </div>
            </li>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
};

export default TechStack;
