import Image from "next/image";
import Text from "../../../shared/text";
import Button from "../../../shared/button";
import {
  Wrapper,
  ImageWrapper,
  Price,
  InfoWrapper,
  PriceWrapper,
  UList,
  ContentWrapper,
} from "./style";

const Card = ({ img, title, warranty, info, price, per, cardType }) => {
  return (
    <Wrapper cardType={cardType}>
      <ImageWrapper cardType={cardType}>
        <Image
          src={img.src}
          alt={title}
          width={img.width}
          height={img.height}
        />
      </ImageWrapper>
      <ContentWrapper cardType={cardType}>
        <Text type="h3" align="center">
          {title}
        </Text>
        <Text align="center">{warranty}</Text>
        <UList>
          {info.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </UList>
        <PriceWrapper>
          <Price>
            <Text type="h3" align="center">
              {price}
            </Text>
            <Text type="p">{per}</Text>
          </Price>
          <Button text="Buy Now" />
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;
