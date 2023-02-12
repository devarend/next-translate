import { createTypedContext } from "@/translate/context";
import { translations } from "@/translate/translations";
import { ReactElement, ReactFragment } from "react";

const Context = createTypedContext({ translation: translations["en"] });

export const TranslateContext = ({
  children,
  language,
}: TranslateContextProps) => {
  <Context.Provider value={{ translation: translations[language] }}>
    {children}
  </Context.Provider>;
};

interface TranslateContextProps {
  children: ReactElement | ReactFragment;
  language: keyof typeof translations;
}
