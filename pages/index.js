import Head from "next/head";

import Layout from "./layout";
import Jumbotron from "../components/Jumbotron";
import Cards from "../components/Cards";
import Video from "../components/Video";
import Dashboard from "../components/Dashboard";
import Mentions from "../components/Mentions";
import Features from "../components/Features";

export default function Home() {
  return (
    <div className="main h-screen">
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
          <Jumbotron />
          <Cards />
          <Video />
          <Dashboard />
          <Mentions />
          <Features />
        </Layout>
      </main>
    </div>
  );
}
