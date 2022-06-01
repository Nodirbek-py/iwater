import Text from "../../shared/text";
import Button from "../../shared/button";
import { mockData } from "./config";

import {
  Question,
  RadiosWrapper,
  Wrapper,
  RadioButton,
  InputWrapper,
} from "./style";
import { ContactInput } from "../Contact/style";

const Popup = ({ btnOnClick }) => {
  return (
    <Wrapper>
      <Text type="h3" align="center">
        Contact
      </Text>
      <div>
        <InputWrapper>
          <ContactInput type="text" placeholder="Hotel name" />
          <ContactInput type="text" placeholder="General manager name" />
        </InputWrapper>
        <InputWrapper>
          <ContactInput type="text" placeholder="Phone number" />
          <ContactInput type="text" placeholder="Email" />
        </InputWrapper>
        {mockData.map((item) => (
          <>
            <Question>{item.question}</Question>
            <RadiosWrapper>
              {item.options.map((options, key) => (
                <RadioButton key={key}>
                  <label>
                    <input
                      type="radio"
                      id={key}
                      name={item.name}
                      value={options}
                    />
                    <span>{options}</span>
                  </label>
                </RadioButton>
              ))}
            </RadiosWrapper>
          </>
        ))}
      </div>
      <Button text="Send" onClick={btnOnClick} />
    </Wrapper>
  );
};

export default Popup;
