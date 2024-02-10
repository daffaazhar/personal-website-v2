import { firaCode } from "@/lib/fonts";
import { mask } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Company = () => {
  const { ref, inView } = useInView({
    threshold: 0.25,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="wrapper py-28">
      <div className="overflow-hidden mt-2">
        <motion.h2
          variants={mask({
            direction: "up",
            duration: 0.5,
            delay: 2 * 0.075,
          })}
          initial="initial"
          animate={inView ? "enter" : ""}
          className="font-black text-4xl lg:text-5xl text-neutral-900 dark:text-white lg:text-center leading-snug lg:leading-snug text-start"
        >
          Has Been Trusted by Many Companies, Organizations, and Institutions.
        </motion.h2>
      </div>
      <div className="flex justify-center items-center w-full mt-16 lg:mt-20">
        <div className="relative w-full lg:scale-90">
          <Image
            src="/map.svg"
            alt="Company Distribution"
            width={500}
            height={500}
            className="w-full object-fit"
          />

          <div className="absolute bottom-[20%] left-[30%] w-[52px] h-[52px] rounded-full bg-neutral-300 border-[3px] overflow-hidden border-white">
            <Image
              src="/data-polis.png"
              alt="Data Polis"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute top-[50%] left-[55%] w-[52px] h-[52px] rounded-full bg-neutral-300 border-[3px] overflow-hidden border-white">
            <Image
              src="/golongan-karya.jpg"
              alt="Golongan Karya"
              width={100}
              height={100}
              className="w-full h-full object-center"
            />
          </div>
          <div className="absolute bottom-[10%] left-[45%] w-[52px] h-[52px] rounded-full bg-white border-[3px] overflow-hidden border-white p-0.5">
            <Image
              src="/himit.png"
              alt="HIMIT PENS"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-[50%] left-[40%] w-[52px] h-[52px] rounded-full bg-white border-[3px] overflow-hidden border-white p-1.5">
            <Image
              src="/apari.png"
              alt="APARI"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[15%] left-[45%] w-[52px] h-[52px] rounded-full bg-white border-[3px] overflow-hidden border-white">
            <Image
              src="/eztakaful.png"
              alt="EzTakaful"
              width={100}
              height={100}
              className="w-full h-full object-contain scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
