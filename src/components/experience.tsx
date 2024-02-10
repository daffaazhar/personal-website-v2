import { Fragment } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { mask } from "@/lib/motion";
import dynamic from "next/dynamic";
import { firaCode } from "@/lib/fonts";

const Experience = () => {
  const { theme } = useTheme();
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
          What I&apos;ve done so far
        </motion.p>
      </div>
      <div className="overflow-hidden mb-20 min-h-14 mt-2">
        <motion.h2
          custom={1}
          variants={mask({
            direction: "up",
            duration: 0.5,
            delay: 1 * 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="text-4xl font-extrabold lg:text-5xl"
        >
          My Experience.
        </motion.h2>
      </div>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "rgb(245, 245, 245)" : "rgb(38, 38, 38)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgb(38, 38, 38)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#171717",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Experience), {
  ssr: false,
});
