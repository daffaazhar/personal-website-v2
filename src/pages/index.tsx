import Intro from "@/components/section/intro";
import Experience from "@/components/section/experience";
import Overview from "@/components/section/overview";
import Company from "@/components/section/company";
import FeaturedProject from "@/components/section/featured-project";
import LatestWriting from "@/components/section/latest-article";
import GetInTouch from "@/components/section/get-in-touch";
import TechStack from "@/components/section/tech-stack";
import { ArticleMetadata, ProjectMetadata } from "@/lib/types";
import { getArticles } from "@/lib/articles";
import { getProjects } from "@/lib/projects";

export async function getStaticProps() {
  const articles = getArticles(4);
  const projects = getProjects(3);

  return {
    props: {
      articles,
      projects,
    },
  };
}

export default function Home({
  articles,
  projects,
}: {
  articles: ArticleMetadata[];
  projects: ProjectMetadata[];
}) {
  return (
    <>
      <Intro />
      <Overview />
      <Experience />
      <Company />
      <TechStack />
      <FeaturedProject metadatas={projects} />
      <LatestWriting metadatas={articles} />
      <GetInTouch />
    </>
  );
}
