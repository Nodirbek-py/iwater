import Jumbotron from "../components/Jumbotron";
import Cards from "../components/Cards";
import Video from "../components/Video";
import Dashboard from "../components/Dashboard";
import Mentions from "../components/Mentions";
import Features from "../components/Features";
import References from "../components/References";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Buy from "../components/Buy";
import Contact from "../components/Contact";
import { home } from "../config/pages";

export default function Home() {
  return (
    <div className="main h-screen">
      <Jumbotron
        title={home.jumbotron.title}
        body={home.jumbotron.body}
        img={home.jumbotron.img}
      />
      <Cards />
      <Video />
      <Dashboard />
      <Mentions />
      <Features />
      <References />
      <Team />
      <FAQ />
      <Buy />
      <Contact />
    </div>
  );
}
