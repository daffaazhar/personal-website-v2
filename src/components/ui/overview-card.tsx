import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

interface OverviewData {
  image: string;
  title: string;
}

const OverviewCard = ({
  index,
  inView,
  data,
}: {
  index: number;
  inView: boolean;
  data: OverviewData;
}) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "right",
        duration: 0.5,
        delay: (index + 1.5) * 0.5,
      })}
      initial="initial"
      animate={inView ? "enter" : ""}
    >
      <Tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#ffffff"
        glarePosition="all"
        glareBorderRadius="20px"
        transitionSpeed={1000}
      >
        <div className="rounded-2xl min-h-[180px] flex items-center justify-center border border-white bg-glassmorphism">
          <h3 className="text-white text-[20px] font-bold text-center">
            {data.title}
          </h3>
        </div>
      </Tilt>
    </motion.div>
  );
};

export { OverviewCard };
