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
          <article key={id} className="relative pl-8">
            {i !== postList.length - 1 && (
              <div className="absolute top-4 left-0 w-[3px] h-[calc(100%_+_1rem)] bg-slate-600"></div>
            )}
            <svg
              viewBox="0 0 10 10"
              className="absolute top-4 left-[-3px] text-slate-600 overflow-visible w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)]"
            >
              <circle
                cx="5"
                cy="5"
                r="5"
                stroke="currentColor"
                className="fill-sky-300"
                strokeWidth="2"
              ></circle>
            </svg>
            <Link href={path}>
              <a className="block p-2 rounded hover:bg-slate-300/10">
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
