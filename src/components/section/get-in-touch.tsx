import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firaCode } from "@/lib/fonts";
import { fadeIn } from "@/lib/motion";
import Image from "next/image";
import { Instagram, Mail, Twitter } from "lucide-react";
import Footer from "../footer";

const GetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <>
      <section ref={ref} className="wrapper pt-44 pb-36">
        <motion.p
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className={`${firaCode.className} text-white text-base`}
        >
          Let&apos;s get in touch
        </motion.p>
        <div className="flex flex-col gap-y-3 mt-6">
          <motion.h2
            variants={fadeIn({
              direction: "up",
              duration: 0.5,
              delay: 0.5,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="font-extrabold text-white text-5xl leading-tight sm:leading-none sm:text-7xl"
          >
            Want to have coffee together?
          </motion.h2>
          <motion.h2
            variants={fadeIn({
              direction: "up",
              duration: 0.5,
              delay: 1,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="font-extrabold text-white text-5xl leading-tight sm:leading-none sm:text-7xl"
          >
            Have any project ideas?
          </motion.h2>
          <motion.h2
            variants={fadeIn({
              direction: "up",
              duration: 0.5,
              delay: 1.5,
            })}
            initial="initial"
            animate={inView ? "enter" : ""}
            className="font-extrabold text-white text-5xl leading-tight sm:leading-none sm:text-7xl"
          >
            Ask something?
          </motion.h2>
        </div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            duration: 0.5,
            delay: 2,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="flex items-center gap-x-8 mt-12"
        >
          {/* <div className="rounded-full bg-neutral-100 dark:bg-white w-max">
            <Image
              src="/profile.webp"
              alt="Foto Daffa"
              width={64}
              height={64}
              priority={true}
              className="w-24 rounded-full"
            />
          </div> */}
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center gap-x-2">
              <Mail fill="#fff" color="#1a232e" size={28} />
              <p className="text-white font-medium text-lg">
                daffaazharsda@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <Instagram fill="#fff" color="#1a232e" size={28} />
              <p className="text-white font-medium text-lg">@daffa_dapu</p>
            </div>
            <div className="flex items-center gap-x-2">
              <Twitter fill="#fff" color="#1a232e" size={28} />
              <p className="text-white font-medium text-lg">@daffaazhar</p>
            </div>
          </div>
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
              delay: 2.5,
              duration: 0.5,
            },
          },
        }}
        initial="initial"
        animate={inView ? "enter" : ""}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default GetInTouch;
