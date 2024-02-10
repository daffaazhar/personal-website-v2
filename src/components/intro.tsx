import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { firaCode } from "@/lib/fonts";
import { fadeIn, mask } from "@/lib/motion";
import Image from "next/image";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="wrapper flex flex-col-reverse items-start gap-y-8 py-16 md:-mt-12 md:min-h-screen md:flex-row md:items-center md:justify-between"
    >
      <div>
        <div className="overflow-hidden">
          <motion.p
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 10 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className={`${firaCode.className} text-base text-neutral-900 dark:text-white`}
          >
            Hi! My name is
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 11 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="mt-4 text-4xl font-extrabold lg:text-6xl text-neutral-900 dark:text-white"
          >
            Daffa Azhar.
          </motion.h1>
        </div>
        <div className="overflow-hidden min-h-16">
          <motion.h2
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 12 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="mt-3 text-4xl font-extrabold text-neutral-700 dark:text-neutral-300 lg:text-5xl"
          >
            I Build things for the web.
          </motion.h2>
        </div>
        <div className="overflow-hidden mt-4 max-w-lg block sm:hidden">
          <motion.p
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 13 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            I am a software engineer who specializes in designing, developing,
            and maintaining user experiences on web pages. Through this website,
            I will share many tips about Front-End Development.
          </motion.p>
        </div>
        <div className="overflow-hidden hidden sm:block mt-4">
          <motion.p
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 13 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            I am a software engineer who specializes in designing, developing,
          </motion.p>
        </div>
        <div className="overflow-hidden hidden sm:block">
          <motion.p
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 14 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            and maintaining user experiences on web pages. Through this
          </motion.p>
        </div>
        <div className="overflow-hidden hidden sm:block">
          <motion.p
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 15 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-relaxed text-neutral-700 dark:text-neutral-300"
          >
            website, I will share many tips about Front-End Development.
          </motion.p>
        </div>
        <div className="mt-8 overflow-hidden">
          <motion.div
            variants={mask({
              direction: "up",
              duration: 0.5,
              delay: 16 * 0.075,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="flex gap-x-4"
          >
            <Button className="p-7">Get Resume</Button>
            <Button className="p-7" variant="secondary">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn({
          direction: "left",
          duration: 0.5,
          delay: 17 * 0.075,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="min-w-max rounded-full bg-neutral-100 dark:bg-white"
      >
        <Image
          src="/3d-image-2.png"
          alt="Foto Daffa"
          width={280}
          height={280}
          priority={true}
          className="w-48 rounded-full md:w-60 lg:w-72"
        />
      </motion.div>
    </section>
  );
}
