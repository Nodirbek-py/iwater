import Text from "../../shared/text";
import Button from "../../shared/button";
import { mockData } from "./config";

import { Question, RadiosWrapper, Wrapper, RadioButton } from "./style";

const Popup = ({ btnOnClick }) => {
  return (
    <Wrapper>
      <Text type="h2" align="center">
        Questionnaire
      </Text>
      <div>
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
                      checked={key === 0 && true}
                    />
                    <span>{options}</span>
                  </label>
                </RadioButton>
              ))}
            </RadiosWrapper>
          </>
        ))}
      </div>
      <Button text="Add to Cart" onClick={btnOnClick} />
    </Wrapper>
  );
};

export default Popup;
