import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firaCode } from "@/lib/fonts";
import { fadeIn } from "@/lib/motion";
import { OverviewCard } from "@/components/ui/overview-card";
import { OVERVIEW_DATAS } from "@/lib/data";

export default function Overview() {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative wrapper py-36">
      <div className="absolute top-[10%] left-[30%] w-80 h-screen bg-[rgba(45,72,152,0.75)] blur-[200px] -rotate-[53.13deg]"></div>
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
        What I&apos;m Offering
      </motion.p>
      <motion.h2
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.3,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="font-black text-4xl lg:text-5xl text-white mt-2"
      >
        My Services.
      </motion.h2>
      {/* <motion.div
        variants={fadeIn({
          direction: "up",
          duration: 0.5,
          delay: 0.45,
        })}
        initial="initial"
        animate={inView ? "enter" : ""}
        className="max-w-2xl text-[#c7c7c7] leading-relaxed mt-4"
      >
        <p>
          Hello! My name is Daffa Azhar and i am 17 years old. My interest in
          web development started in 2018 (when I was 13 years old) when I tried
          to edit test scores on the web using inspect element and showed it off
          to my friends (peace). And it turns out that it taught me a lot about
          HTML and CSS.
        </p>
        <p className="mt-2">
          Fast-forward to today, I just graduated from high school majoring in
          math and natural sciences. I also have experience working with Micro,
          Small and Medium Enterprises owners in various sectors, such as
          fashion, food, medicine, etc.
        </p>
        <p></p>
      </motion.div> */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {OVERVIEW_DATAS.map((data, index) => (
          <OverviewCard key={index} index={index} inView={inView} data={data} />
        ))}
      </div>
    </section>
  );
}
