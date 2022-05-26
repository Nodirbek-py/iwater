import Image from "next/image";
import Text from "../../shared/text";
import Button from "../../shared/button";
import {
  Wrapper,
  ImageWrapper,
  Price,
  InfoWrapper,
  PriceWrapper,
  UList,
  ContentWrapper,
} from "./style";

const ProductCard = ({
  img,
  title,
  warranty,
  info,
  price,
  per,
  cardType,
  buttonTitle,
  btnOnClick,
}) => {
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
        <UList className="ulist">
          {info.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </UList>
        <PriceWrapper className="price-wrapper">
          <Price>
            <Text type="h3" align="center">
              {price}
            </Text>
            <Text type="p">{per}</Text>
          </Price>
          <Button
            onClick={btnOnClick}
            href={"/precheckout/" + title.toLowerCase()}
            text={buttonTitle ? buttonTitle : "Buy Now"}
          />
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductCard;
