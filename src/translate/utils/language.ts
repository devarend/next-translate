import Negotiator from "negotiator";
import { IncomingMessage } from "http";
import { translations } from "@/translate/translations";
import {Languages} from "@/translate/context/TranslateContext";

export const FALLBACK_LANGUAGE = "en";

export const getLanguage = (req: IncomingMessage) => {
  const negotiator = new Negotiator(req);
  const availableLanguages = Object.keys(translations);
  const language = negotiator.language(availableLanguages);
  if (!language || !(language in translations)) {
    return FALLBACK_LANGUAGE;
  }
  return language as Languages;
};
