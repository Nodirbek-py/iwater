import Image from "next/image";

import Text from "../../shared/text";
import { CardsGrid, CardsWrapper, Card, TextWrapper } from "./style";
const Cards = () => {
  const cardsContent = [
    {
      img: "/icons/revovation.png",
      text: "No Renovation",
    },
    {
      img: "/icons/plumbing.png",
      text: "No Plumbing Required",
    },
    {
      img: "/icons/install.png",
      text: "2 Minute Install",
    },
    {
      img: "/icons/temperature.png",
      text: "Same Temperature",
    },
    {
      img: "/icons/pressure.png",
      text: "Save Pressure",
    },
    {
      img: "/icons/set.png",
      text: "Set it Forgot it",
    },
  ];

  return (
    <CardsWrapper>
      <TextWrapper>
        <Text type="h2">Keep your Shower the Way you Like it.</Text>
      </TextWrapper>
      <CardsGrid>
        {cardsContent.map((content, i) => (
          <Card key={i}>
            <Image
              src={content.img}
              alt={content.text}
              width="61"
              height="61"
              objectFit="scale-down"
            />
            <Text p align="center">
              {content.text}
            </Text>
          </Card>
        ))}
      </CardsGrid>
    </CardsWrapper>
  );
};

export default Cards;
