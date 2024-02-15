import { Fragment } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/lib/motion";
import { firaCode } from "@/lib/fonts";
import dynamic from "next/dynamic";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative wrapper py-36">
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
        What I&apos;ve done so far
      </motion.p>
      <motion.h2
        custom={1}
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.3,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="text-4xl font-extrabold lg:text-5xl text-white mb-20 mt-2"
      >
        My Experience.
      </motion.h2>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                boxShadow: "none",
                border: "1px solid #fff",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #FFFFFF",
              }}
              date={item.date}
              dateClassName="text-white"
              icon={item.icon}
              iconStyle={{
                fontSize: "1.5rem",
                color: "#fff",
                boxShadow: "0 0 0 1px #fff",
              }}
              iconClassName="bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10"
            >
              <h3 className="font-semibold capitalize text-white">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-white">{item.location}</p>
              <p className="!mt-1 !font-normal text-[#c7c7c7]">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
        <div className="absolute top-0 right-0 w-52 h-80 bg-[#7c39a3] blur-[175px]"></div>
      </VerticalTimeline>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Experience), {
  ssr: false,
});
