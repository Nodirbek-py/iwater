import Image from "next/image";

import Text from "../../shared/text";
import Button from "../../shared/button";
import {
  Wrapper,
  ImageWrapper,
  Price,
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
  id,
  type,
}) => {
  return (
    <Wrapper cardType={cardType}>
      <ImageWrapper cardType={cardType}>
        <Image
          src={img?.src}
          alt={title}
          width={img?.width}
          height={img?.height}
        />
      </ImageWrapper>
      <ContentWrapper type={type} cardType={cardType}>
        <Text type={type ? "h2" : "h3"} align="center">
          {title}
        </Text>
        <Text type={type ? "p" : null} align="center">
          {warranty}
        </Text>
        <UList className="ulist" type={type}>
          {info?.map((item, key) => (
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
          {buttonTitle ? (
            <Button onClick={btnOnClick} text={buttonTitle} />
          ) : (
            <Button href={"/precheckout/" + id} text={"Buy Now"} />
          )}
        </PriceWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProductCard;
