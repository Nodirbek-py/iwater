import Jumbotron from "../../components/Jumbotron";
import FAQ from "../../components/FAQ";
import Dashboard from "../../components/Dashboard";
import Mentions from "../../components/Mentions";
import { pricing } from "../../config/pages";
import Cards from "../../components/Cards2";

import { Wrapper } from "../../components/Wrapper/style";

export default function Pricing() {
  return (
    <Wrapper>
      <Jumbotron
        title={pricing.jumbotron.title}
        body={pricing.jumbotron.body}
      />
      <Cards />
      <FAQ />
      <Dashboard />
      <Mentions />
    </Wrapper>
  );
}
