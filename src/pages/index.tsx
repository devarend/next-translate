import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useTranslation } from "@/translate/hooks/useTranslation";
import { withTranslation } from "@/translate/hoc/withTranslation";

export const getServerSideProps = withTranslation(({ req, language }) => {
  return {
    props: {
      language,
    },
  };
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Next translate</title>
        <meta name="description" content="Next translate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>{t.TEST}</p>
        </div>
      </main>
    </>
  );
}
