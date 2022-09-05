import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/utils/gtag";

export const useGa = (env: "development" | "production" | "test") => {
  const router = useRouter();
  useEffect(() => {
    if (env !== "production") return;
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events, env]);
};
