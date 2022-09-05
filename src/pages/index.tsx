import type { NextPageWithLayout, InferGetStaticPropsType } from "next";
import { HomeIndex } from "@/components/page/home/HomeIndex";
import { BaseLayout } from "@/components/layout/BaseLayout";
import { getSortedPosts } from "@/interfaces/post";

export const getStaticProps = async () => {
  const postList = await getSortedPosts();
  return {
    props: {
      postList,
    },
  };
};

const HomePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ postList }) => {
  return <HomeIndex postList={postList} />;
};

HomePage.getLayout = page => {
  return (
    <BaseLayout isTop page="Home">
      {page}
    </BaseLayout>
  );
};

export default HomePage;
