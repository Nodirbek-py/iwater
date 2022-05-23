import Jumbotron from "../../components/Jumbotron";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Dashboard from "../../components/Dashboard";
import Mentions from "../../components/Mentions";
import CheckoutCard from "../../components/CheckoutCard";
import { precheckout } from "../../config/pages";

import { Wrapper } from "./style";

export default function PreCheckout() {
  return (
    <Wrapper>
      <Jumbotron
        title={precheckout.jumbotron.title}
        body={precheckout.jumbotron.body}
      />
      <CheckoutCard />
      <Features />
      <FAQ />
      <Dashboard />
      <Mentions />
    </Wrapper>
  );
}
