import "prismjs/themes/prism-okaidia.min.css";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import type { AppPropsWithLayout } from "next/app";
import Script from "next/script";
import { useGa } from "@/hooks/useGa";
import { META } from "@/constants/meta";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const env = process.env.NODE_ENV;
  useGa(env);
  const getLayout = Component.getLayout ?? (page => page);
  return getLayout(
    <>
      {env === "production" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${META.gid}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${META.gid}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
