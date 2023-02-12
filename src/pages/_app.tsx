import "@/styles/globals.css";
import { Languages, TranslateContext } from "@/translate/TranslateContext";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps<{ language: Languages }>) {
  return (
    <TranslateContext language={pageProps.language || "en"}>
      <Component {...pageProps} />
    </TranslateContext>
  );
}
