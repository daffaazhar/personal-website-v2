import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firaCode } from "@/lib/fonts";
import { fadeIn, mask } from "@/lib/motion";

export default function Overview() {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="wrapper py-28">
      <div className="overflow-hidden">
        <motion.p
          variants={mask({
            direction: "up",
            duration: 0.5,
            delay: 1 * 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className={`${firaCode.className}`}
        >
          Introduction
        </motion.p>
      </div>
      <div className="overflow-hidden mt-2">
        <motion.h2
          variants={mask({
            direction: "up",
            duration: 0.5,
            delay: 2 * 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="font-black text-4xl lg:text-5xl text-neutral-900 dark:text-white"
        >
          Overview.
        </motion.h2>
      </div>
      <div className="overflow-hidden mt-4">
        <motion.p
          variants={mask({
            direction: "up",
            duration: 0.5,
            delay: 3 * 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="max-w-2xl text-neutral-700 dark:text-neutral-300 leading-relaxed"
        >
          I&apos;m a skilled software developer with experience in TypeScript
          and JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I&apos;m a quick learner and collaborate closely with
          clients to create efficient, scalable, and user-friendly solutions
          that solve real-world problems. Let&apos;s work together to bring your
          ideas to life!
        </motion.p>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn({
                direction: "right",
                type: "spring",
                duration: 0.5,
                delay: index * 0.5,
              })}
              initial="initial"
              animate={inView ? "enter" : ""}
              className="bg-neutral-100 dark:bg-[#202020] rounded-2xl min-h-[180px] shadow-[0px_35px_120px_rgba(43,43,46,0.1)] dark:shadow-[0px_35px_120px_rgba(43,43,46,0.5)] flex items-center justify-center border border-neutral-300 dark:border-neutral-600"
            >
              <h3 className="dark:text-white text-neutral-900 text-[20px] font-bold text-center">
                Web Developer
              </h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
