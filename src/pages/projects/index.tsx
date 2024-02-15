import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { getProjects } from "@/lib/projects";
import { ProjectMetadata } from "@/lib/types";
import { ProjectCard } from "@/components/ui/project-card";
import Footer from "@/components/footer";

export async function getStaticProps() {
  const metadatas = getProjects();

  return {
    props: {
      metadatas,
    },
  };
}

const Projects = ({ metadatas }: { metadatas: ProjectMetadata[] }) => {
  return (
    <>
      <section className="wrapper pt-8 pb-32">
        <div>
          <motion.h1
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.6,
            })}
            initial="initial"
            animate="enter"
            className="text-4xl text-white font-extrabold"
          >
            Projects
          </motion.h1>
          <motion.p
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.75,
            })}
            initial="initial"
            animate="enter"
            className="text-white mt-2"
          >
            Showcase of my works on frontend development.
          </motion.p>
          <motion.div
            variants={fadeIn({
              direction: "up",
              type: "spring",
              duration: 1,
              delay: 0.9,
            })}
            initial="initial"
            animate="enter"
          ></motion.div>
        </div>

        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 1,
            delay: 1.05,
          })}
          initial="initial"
          animate="enter"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {metadatas.map((metadata, index) => (
            <ProjectCard key={index} data={metadata} />
          ))}
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
              duration: 0.5,
              delay: 1.25,
            },
          },
        }}
        initial="initial"
        animate="enter"
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default Projects;
