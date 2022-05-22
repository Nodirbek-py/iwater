import Image from "next/image";
import Text from "../../../shared/text";
import Button from "../../../shared/button";
import {
  Wrapper,
  ImageWrapper,
  Price,
  InfoWrapper,
  UList,
  ContentWrapper,
} from "./style";

const Card = ({ img, title, warranty, info, price, per, cardType }) => {
  return (
    <Wrapper>
      <ImageWrapper cardType={cardType}>
        <Image
          src={img.src}
          alt={title}
          width={img.width}
          height={img.height}
          //   objectFit="scale-down"
        />
      </ImageWrapper>
      <ContentWrapper cardType={cardType}>
        <Text type="h3" align="center">
          {title}
        </Text>
        <Text align="center">{warranty}</Text>
        <UList>
          {info.map((item, key) => (
            <li key={key}>
              <Text>{item}</Text>
            </li>
          ))}
        </UList>
        <Price>
          <Text type="h3" align="center">
            {price}
          </Text>
          <Text type="p">{per}</Text>
        </Price>
        <Button text="Buy Now" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Card;
