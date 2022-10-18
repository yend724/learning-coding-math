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
    <div className="relative flex flex-col gap-y-4 max-w-3xl h-full mx-auto pb-16 divide-y divide-neutral-400">
      {postList.map((post, i) => {
        const { id, title, path, date } = post;
        return (
          <article key={id} className="relative pt-2">
            <Link href={path}>
              <a className="block py-4">
                <time
                  className="inline-block text-base text-neutral-400"
                  dateTime={date}
                >
                  {date}
                </time>
                <h2 className="mt-4 text-2xl">{title}</h2>
              </a>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
