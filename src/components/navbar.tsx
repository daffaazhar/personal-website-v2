import { useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";

const titleAnimation: Variants = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation: Variants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -22,
    transition: {
      duration: 0.75,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo: Variants = {
  rest: {
    y: 22,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedWord: React.FC<{
  title: string;
  animation: Variants;
  isHovered: boolean;
}> = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title.split("").map((character: string, i: number) =>
        character === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            variants={animation}
            className="relative inline-block whitespace-nowrap"
          >
            {character}
          </motion.span>
        )
      )}
    </motion.span>
  );
};

const AnimatedLink: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href} scroll={false}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="overflow-hidden relative cursor-pointer"
      >
        <AnimatedWord
          title={title}
          animation={letterAnimation}
          isHovered={isHovered}
        />
        <div className="absolute top-0">
          <AnimatedWord
            title={title}
            animation={letterAnimationTwo}
            isHovered={isHovered}
          />
        </div>
      </motion.div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (position) => {
    position > 0 ? setIsScrolled(true) : setIsScrolled(false);
  });

  const navLinks = [
    { title: "Articles", href: "/articles" },
    { title: "Projects", href: "/project" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  const animation = {
    initial: { y: "-100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <header
      className={`sticky top-0 left-0 w-full bg-white dark:bg-neutral-900 z-50`}
    >
      <motion.div
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%" },
        }}
        animate={isScrolled ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-full border-b border-neutral-200 dark:border-neutral-800"
      ></motion.div>
      <div className="wrapper flex items-center justify-between py-4">
        <div className="overflow-hidden">
          <Link href="/">
            <motion.h1
              custom={1}
              variants={animation}
              initial="initial"
              animate="enter"
              className="text-2xl font-bold text-dark dark:text-white"
            >
              Daffa Azhar
            </motion.h1>
          </Link>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-6">
          <div className="order-last block md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger>
                <Button asChild variant="outline" size="icon" className="p-2">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <ul className="flex flex-col gap-y-4">
                  {navLinks.map((link, i) => {
                    return (
                      <li key={i} onClick={() => setIsSheetOpen(false)}>
                        <Link href={link.href}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          <ul className="order-first hidden flex-row gap-x-6 md:flex">
            {navLinks.map((link, i) => {
              return (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    custom={i + 5}
                    variants={animation}
                    initial="initial"
                    animate="enter"
                    className="relative"
                  >
                    <AnimatedLink title={link.title} href={link.href} />
                  </motion.div>
                </div>
              );
            })}
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
