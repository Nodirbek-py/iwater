import Image from "next/image";

import Text from "../../shared/text";
import { Wrapper, ImageWrapper } from "./style";

const Jumbotron = ({ title, body, img }) => {
  return (
    <Wrapper>
      <Text type="h1" align="center">
        {title}
      </Text>
      <Text type="p" align="center">
        {body}
      </Text>
      {img && (
        <ImageWrapper>
          <Image
            src="/imgs/tech.png"
            width="420"
            height="375"
            alt="iWater - Hardware picture"
          />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default Jumbotron;
