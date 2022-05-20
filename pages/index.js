import Head from "next/head";

import Jumbotron from "../components/Jumbotron";
import Layout from "./layout";

export default function Home() {
  return (
    <div className="main h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="iWater - Reduction Without Regret" />
        <meta
          name="description"
          content="Take control of your water and bottom line with iWater, meet WES."
        />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <main>
        <Layout>
          <Jumbotron />
        </Layout>
      </main>
    </div>
  );
}
