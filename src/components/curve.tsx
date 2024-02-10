import React, { ReactNode, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import { useRouter } from "next/router";

const routes = {
  "/": [
    "Hola",
    "Bonjour",
    "السلام عليكم",
    "안녕하세요",
    "Chào!",
    "Hello",
    "Здравейте",
    "Hoi",
    "Γεια σας",
    "Halo!",
  ],
  "/blog": "Blog",
  "/contact": "Contact",
  "/company": "Company",
};

const anim = (variants: Variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const SVG: React.FC<{ width: number; height: number }> = ({
  width,
  height,
}) => {
  const router = useRouter();
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (greetingIndex < routes["/"].length - 1) {
      interval = setInterval(() => {
        setGreetingIndex((prevIndex) => prevIndex + 1);
      }, 200);
    }

    return () => clearInterval(interval);
  }, [greetingIndex]);

  const initialPath = `
    M0 300
		Q${width / 2} 0 ${width} 300
		L${width} ${height + 300}
		Q${width / 2} ${height + 600} 0 ${height + 300}
		L0 300
  `;

  const targetPath = `
    M0 300
		Q${width / 2} 0 ${width} 300
		L${width} ${height}
		Q${width / 2} ${height} 0 ${height}
		L0 300
  `;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: router.route === "/" ? 2.5 : 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        delay: router.route === "/" ? 2.5 : 0.3,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <>
      <motion.svg
        {...anim(slide)}
        className="fill-neutral-900 dark:fill-neutral-300"
      >
        <motion.path {...anim(curve)}></motion.path>
        <text
          className="fill-white dark:fill-neutral-900"
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize="48"
          dy="-1.5rem"
        >
          {router.route === "/"
            ? routes["/"][greetingIndex]
            : (routes as any)[router.route]}
        </text>
      </motion.svg>
    </>
  );
};

const Curve: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const body = {
    initial: {
      top: "-100px",
    },
    enter: {
      top: "0",
    },
  };

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width > 0 ? 0 : 1 }}
        className="background"
      ></div>
      {dimensions.width > 0 && <SVG {...dimensions} />}
      <motion.div {...anim(body)}>{children}</motion.div>
    </div>
  );
};

export default Curve;
