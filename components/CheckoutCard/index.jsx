import ProductCard from "../ProductCard";
import { cards } from "../config";

import { Wrapper } from "./style";

const CheckoutCard = () => {
  const item = cards[1];

  return (
    <Wrapper>
      <ProductCard
        img={item.img}
        title={item.title}
        warranty={item.warranty}
        info={item.info}
        price={item.price.amount}
        per={item.price.per}
        cardType={item.cardType}
        buttonTitle={"Add to Cart"}
      />
    </Wrapper>
  );
};

export default CheckoutCard;