import NextHead from "next/head";
import { useRouter } from "next/router";
import { META } from "@/constants/meta";

export type HeadProps =
  | {
      isTop?: false;
      title: string;
    }
  | {
      isTop: true;
      title?: string;
    };

export const Head: React.FC<HeadProps> = ({
  isTop = false,
  title = META.siteName,
}) => {
  const router = useRouter();
  const canonicalURL = `https://${META.domain}${router.asPath}`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={META.description} />
      <meta property="og:site_name" content={META.siteName} />
      <meta property="og:type" content={isTop ? "website" : "article"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={META.description} />
      <meta
        property="og:image"
        content={`https://${META.domain}/img/ogp.png`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content={META.twitterAccount} />
      <meta property="twitter:creator" content={META.twitterAccount} />
      <link rel="canonical" href={canonicalURL} />
    </NextHead>
  );
};
