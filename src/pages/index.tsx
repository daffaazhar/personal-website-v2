import Intro from "@/components/section/intro";
import Experience from "@/components/section/experience";
import Overview from "@/components/section/overview";
import Company from "@/components/section/company";
import FeaturedProject from "@/components/section/featured-project";
import LatestWriting from "@/components/section/latest-article";
import GetInTouch from "@/components/section/get-in-touch";
import { getArticles } from "@/lib/articles";
import { ArticleMetadata } from "@/lib/types";

export async function getStaticProps() {
  const articles = getArticles(4);

  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }: { articles: ArticleMetadata[] }) {
  return (
    <>
      <Intro />
      <Overview />
      <Experience />
      <Company />
      <FeaturedProject />
      <LatestWriting metadatas={articles} />
      <GetInTouch />
    </>
  );
}
