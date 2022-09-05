import { Head, HeadProps } from "@/components/ui/Head";

type BaseLayoutPorps = {
  children: React.ReactNode;
  page: string;
} & HeadProps;
export const BaseLayout: React.FC<BaseLayoutPorps> = ({
  children,
  page,
  title,
  isTop,
}) => {
  return (
    <div
      data-wrapper={page}
      className="grid grid-cols-1 grid-rows-[auto_1fr_auto] min-h-screen"
    >
      {isTop ? <Head isTop /> : <Head title={title} />}
      {children}
    </div>
  );
};
