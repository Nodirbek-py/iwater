import Image from "next/image";

import Text from "../../shared/text";
import Button from "../../shared/button";
import { BuyHeadings, BuyWrapper, ImageWrapper, VerticalImages } from "./style";

const Buy = () => {
  return (
    <BuyWrapper>
      <div>
        <VerticalImages>
          <ImageWrapper>
            <Image
              src="/imgs/tech.png"
              alt="Hardware"
              width="100"
              height="100"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/imgs/tech.png"
              alt="Hardware"
              width="100"
              height="100"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Image
              src="/imgs/tech.png"
              alt="Hardware"
              width="100"
              height="100"
            />
          </ImageWrapper>
        </VerticalImages>
        <ImageWrapper>
          <Image src="/imgs/tech.png" alt="Hardware" width="360" height="360" />
        </ImageWrapper>
      </div>
      <div>
        <BuyHeadings>W.E.S</BuyHeadings>
        <Text type="h1" align="left">
          Water and Energy Savings
        </Text>
        <Button style={{ marginTop: 10 }} href="/pricing/" text="Buy now" />
      </div>
    </BuyWrapper>
  );
};

export default Buy;
