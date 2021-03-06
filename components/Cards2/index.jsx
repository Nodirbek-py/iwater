import ProductCard from "../ProductCard";
import { cards } from "../config";
import { Wrapper, CardWrapper } from "./style";

const Cards2 = () => {
  return (
    <Wrapper>
      {cards.map((item, key) => (
        <CardWrapper key={key}>
          <ProductCard
            img={item.img}
            title={item.title}
            warranty={item.warranty}
            info={item.info}
            price={item.price.amount}
            per={item.price.per}
            cardType={item.cardType}
            id={item.id}
          />
        </CardWrapper>
      ))}
    </Wrapper>
  );
};

export default Cards2;
