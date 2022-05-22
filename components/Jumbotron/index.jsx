import Image from "next/image";

import Text from "../../shared/text";
import { Wrapper, ImageWrapper } from "./style";

const Jumbotron = () => {
  return (
    <Wrapper>
      <Text type="h1" align="center">
        Reduction Without Regret
      </Text>
      <Text type="p" align="center">
        Take control of your water and bottom line with iWater, meet WES.
      </Text>
      <ImageWrapper>
        <Image
          src="/imgs/tech.png"
          width="420"
          height="375"
          alt="iWater - Hardware picture"
        />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Jumbotron;
