const mask = ({
  direction,
  duration,
  delay,
}: {
  direction: string;
  duration: number;
  delay: number;
}) => {
  return {
    initial: {
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    },
    enter: {
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
};

const fadeIn = ({
  direction,
  type,
  duration,
  delay,
}: {
  direction: string;
  type?: string;
  duration: number;
  delay: number;
}) => {
  return {
    initial: {
      x: direction === "left" ? "100%" : direction === "right" ? "-100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
      opacity: 0,
    },
    enter: {
      x: "0",
      y: "0",
      opacity: 1,
      transition: {
        type,
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };
};

export { mask, fadeIn };
