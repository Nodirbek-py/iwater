import { useState } from "react";

import {
  Collapse,
  CollapseButton,
  CollapseContent,
  CollapseHeading,
  CollapseWrapper,
  FAQWrapper,
} from "./style";
import Text from "../../shared/text";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How easy is it to install? ",
      answer: "Yes, it is easy, you will be provided with instructions",
      open: false,
    },
    {
      question: "Will this affect temperature or pressure? ",
      answer: "No. Keep your shower exactly as you like it.",
      open: false,
    },
    {
      question:
        "Will my hotel guests notice any differences in their shower experience?",
      answer: "No, they will notice any differences",
      open: false,
    },
  ]);

  const handleCollapse = (index) => {
    let faqsCopy = [...faqs];
    faqsCopy = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, open: !faqs[index].open };
      } else {
        return faq;
      }
    });
    setFaqs(faqsCopy);
  };

  return (
    <FAQWrapper id="faq">
      <Text type="h3" align="center">
        Frequently Asked Questions
      </Text>
      <CollapseWrapper>
        {faqs.map((faq, i) => {
          return (
            <Collapse key={i}>
              <CollapseButton onClick={() => handleCollapse(i)}>
                {faq.open ? "–" : "+"}
              </CollapseButton>
              <div>
                <CollapseHeading>{faq.question}</CollapseHeading>
                {faq.open && <CollapseContent>{faq.answer}</CollapseContent>}
              </div>
            </Collapse>
          );
        })}
      </CollapseWrapper>
    </FAQWrapper>
  );
};

export default FAQ;
