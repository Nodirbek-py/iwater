import Head from "next/head";
import Layout from "./layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>iWater - Reduction Without Regret</title>
        <meta
          name="description"
          content="Take control of your water and bottom line with iWater, meet WES."
        />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default MyApp;
