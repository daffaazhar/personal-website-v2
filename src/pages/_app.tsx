import type { AppProps } from "next/app";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { inter } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import "devicon/devicon.min.css";

const perspective = {
  initial: {
    scale: 1,
    y: 0,
  },
  enter: {
    scale: 1,
    y: 0,
  },
  exit: {
    scale: 0.9,
    y: -150,
    opacity: 0.5,
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slide = {
  initial: {
    y: "100dvh",
  },
  enter: {
    y: "100dvh",
  },
  exit: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={`antialiased ${inter.className}`}>
      <AnimatePresence mode="wait">
        <motion.div className="inner" key={router.route}>
          <motion.div className="slide" {...anim(slide)} />
          <motion.div className="page" {...anim(perspective)}>
            <motion.div {...anim(opacity)}>
              <Navbar />
              <motion.div {...anim(opacity)}>
                <Component {...pageProps} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
