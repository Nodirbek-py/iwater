import Jumbotron from "../../components/Jumbotron";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Dashboard from "../../components/Dashboard";
import Mentions from "../../components/Mentions";
import { precheckout } from "../../config/pages";

export default function PreCheckout() {
  return (
    <div>
      <Jumbotron
        title={precheckout.jumbotron.title}
        body={precheckout.jumbotron.body}
      />
      <Features />
      <FAQ />
      <Dashboard />
      <Mentions />
    </div>
  );
}
