import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { PostList } from '@/components/feature/post/PostList';

type HomeIndexProps = {
  postList: {
    id: string;
    title: string;
    date: string;
    path: string;
  }[];
};
export const HomeIndex: React.FC<HomeIndexProps> = ({ postList }) => {
  return (
    <>
      <Header />
      <main className="px-8">
        <div className="mx-auto h-full">
          <PostList postList={postList} />
        </div>
      </main>
      <Footer />
    </>
  );
};
