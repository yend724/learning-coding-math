import type {
  NextPageWithLayout,
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import { BaseLayout } from "@/components/layout/BaseLayout";
import { PostIndex } from "@/components/page/post/[id]/PostIndex";
import { getPost, getPostIds } from "@/interfaces/post";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: await getPostIds(),
    fallback: false,
  };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const post = await getPost(params?.id as string);
  return {
    props: {
      post,
    },
  };
};

const PostPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  return <PostIndex post={post} />;
};

PostPage.getLayout = page => {
  return (
    <BaseLayout
      title={`${page.props.children[1].props.post.title} | Creative Codingの積み木`}
      page="Post"
    >
      {page}
    </BaseLayout>
  );
};

export default PostPage;
