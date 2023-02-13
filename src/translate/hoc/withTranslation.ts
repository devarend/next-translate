import {Languages} from "@/translate/context/TranslateContext";
import {GetServerSidePropsContext, GetServerSidePropsResult} from "next";
import {getLanguage} from "@/translate/utils/language";

interface AdditionalServerSideParams {
    language: Languages
}

export const withTranslation = (handler: (context:GetServerSidePropsContext & AdditionalServerSideParams) => GetServerSidePropsResult<{language: Languages}>) => {
    return async (context: GetServerSidePropsContext) => {
        const {req} = context;
        const language = getLanguage(req)
        return handler({...context, language});
    }
}