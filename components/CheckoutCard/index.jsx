import { useEffect } from "react";

import ProductCard from "../ProductCard";
import { cards } from "../config";

import { Wrapper } from "./style";

const CheckoutCard = ({ btnOnClick, type }) => {
  const item = cards.find((item) => item.id === type);
  return (
    <Wrapper>
      <ProductCard
        type={type}
        img={item.img}
        title={item.title}
        warranty={item.warranty}
        info={item.info}
        price={item.price.amount}
        per={item.price.per}
        cardType={item.cardType}
        buttonTitle={"Add to Cart"}
        btnOnClick={btnOnClick}
      />
    </Wrapper>
  );
};

export default CheckoutCard;
