import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { firaCode } from "@/lib/fonts";
import { fadeIn } from "@/lib/motion";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import dynamic from "next/dynamic";

const Intro = () => {
  const { width } = useWindowDimensions();
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
        <motion.p
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 0.6,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className={`${firaCode.className} text-white text-base`}
        >
          Hi! My name is
        </motion.p>

        <motion.h1
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 0.75,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="mt-4 text-4xl font-extrabold text-white lg:text-6xl"
        >
          Daffa Azhar.
        </motion.h1>
        <motion.h2
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 0.9,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="mt-3 text-4xl font-extrabold text-[#c7c7c7] lg:text-5xl"
        >
          I Build things for the web.
        </motion.h2>
        <div className="mt-4 max-w-lg">
          <motion.p
            variants={fadeIn({
              direction: "up",
              duration: 0.5,
              delay: 1.05,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="leading-relaxed text-[#c7c7c7] "
          >
            I am a software engineer who specializes in designing, developing,
            and maintaining user experiences on web pages. Through this website,
            I will share many tips about Front-End Development.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 1.2,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="flex gap-x-4 mt-8"
        >
          <Button className="p-7" variant="secondary">
            Get Resume
          </Button>
          <Button className="p-7 bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 hover:bg-opacity-20 hover:bg-blue-200">
            Learn More
          </Button>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn({
          direction: width! > 768 ? "left" : "up",
          duration: 0.5,
          delay: width! > 768 ? 1.35 : 8 * 0.075,
        })}
        initial="initial"
        animate={inView && width !== undefined ? "enter" : ""}
        className="min-w-max rounded-full bg-neutral-100 dark:bg-white"
      >
        <Image
          src="/3d-profile.png"
          alt="Foto Daffa"
          width={280}
          height={280}
          priority={true}
          className="w-48 rounded-full md:w-60 lg:w-72"
        />
      </motion.div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Intro), {
  ssr: false,
});
