import Link from 'next/link';
type PostListProps = {
  postList: {
    id: string;
    title: string;
    date: string;
    path: string;
  }[];
};
export const PostList: React.FC<PostListProps> = ({ postList }) => {
  return (
    <div className="relative flex flex-col gap-y-4 max-w-3xl h-full mx-auto pb-16">
      {postList.map((post, i) => {
        const { id, title, path, date } = post;
        return (
          <article key={id} className="relative">
            <Link href={path}>
              <a className="block p-4 rounded bg-neutral-800">
                <time className="text-sm text-neutral-400" dateTime={date}>
                  {date}
                </time>
                <h2 className="mt-2 text-base">{title}</h2>
              </a>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
