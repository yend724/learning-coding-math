import Link from 'next/link';
import { Footer } from '@/components/ui/Footer';
import { Icon } from '@/components/ui/Icon';

type PostIndexProps = {
  post: {
    date: string;
    title: string;
    id: string;
    contentHtml: string;
  };
};
export const PostIndex: React.FC<PostIndexProps> = ({ post }) => {
  const { title, date, contentHtml } = post;
  return (
    <>
      <header className="px-6">
        <div className="relative flex flex-col justify-center items-center gap-y-4 w-full max-w-3xl mx-auto pt-16 pb-12">
          <Link href="/">
            <a className="absolute top-4 left-0 block w-8 h-8 indent-[100%] whitespace-nowrap overflow-hidden">
              <Icon />
              トップへもどる
            </a>
          </Link>
          <h1 className="text-4xl text-center font-bold">{title}</h1>
          <p>
            <time dateTime={date}>{date}</time>
          </p>
        </div>
      </header>
      <main className="px-6 pb-16 grid grid-cols-1 grid-rows-[1fr_auto]">
        <article
          id="post"
          className="max-w-3xl mx-auto w-full"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </main>
      <Footer />
    </>
  );
};
