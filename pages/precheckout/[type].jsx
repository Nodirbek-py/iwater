import { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

import Jumbotron from "../../components/Jumbotron";
import Features from "../../components/Features";
import FAQ from "../../components/FAQ";
import Dashboard from "../../components/Dashboard";
import Mentions from "../../components/Mentions";
import CheckoutCard from "../../components/CheckoutCard";
import Popup from "../../components/Popup";
import { precheckout } from "../../config/pages";
import { modalStyle } from "../../config/modal";

import { Wrapper } from "../../components/sharedStyle";

export default function PreCheckout() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { type } = router;

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Product"
      >
        <Popup btnOnClick={() => setIsOpen(false)} />
      </Modal>
      <Jumbotron
        title={precheckout.jumbotron.title}
        body={precheckout.jumbotron.body}
      />
      <CheckoutCard btnOnClick={() => setIsOpen(true)} />
      <Features />
      <FAQ />
      <Dashboard />
      <Mentions />
    </Wrapper>
  );
}
