import { translations } from "@/translate/translations";
import { ReactElement, ReactFragment } from "react";
import {createTypedContext} from "@/translate/context/context";

export const Context = createTypedContext({ translation: translations["en"] });
export type Languages = keyof typeof translations;

export const TranslateContext = ({
  children,
  language,
}: TranslateContextProps) => (
  <Context.Provider value={{ translation: translations[language] }}>
    {children}
  </Context.Provider>
);

interface TranslateContextProps {
  children: ReactElement | ReactFragment;
  language: Languages;
}
