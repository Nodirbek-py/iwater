import Button from "../../shared/button";
import Text from "../../shared/text";
import {
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactWrapper,
  FormHeading,
} from "./style";

const Contact = () => {
  return (
    <ContactWrapper>
      <Text type="h3" align="center">
        Contact Us
      </Text>
      <ContactForm>
        <FormHeading>For Inquires, Jobs, Anything</FormHeading>
        <ContactInput type="text" placeholder="Your name" />
        <ContactInput type="text" placeholder="Your email" />
        <ContactInput type="text" placeholder="Topic of your message" />
        <ContactTextarea rows={3} placeholder="Your message" />
        <Button text="Send" />
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
