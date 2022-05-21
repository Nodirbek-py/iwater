import Head from "next/head";

import Layout from "./layout";
import Jumbotron from "../components/Jumbotron";
import Cards from "../components/Cards";
import Video from "../components/Video";
import Dashboard from "../components/Dashboard";
import Mentions from "../components/Mentions";

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
          <Cards />
          <Video />
          <Dashboard />
          <Mentions />
        </Layout>
      </main>
    </div>
  );
}
