import { useContext } from "react";
import { Context } from "@/translate/context/TranslateContext";

export const useTranslation = () => {
  const { translation } = useContext(Context);
  return {
    t: translation,
  };
};
