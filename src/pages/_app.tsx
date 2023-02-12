import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Languages, TranslateContext} from "@/translate/context/TranslateContext";

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
