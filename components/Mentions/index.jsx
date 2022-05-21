import Image from "next/image";

import { BrandsWrapper, Dot, DotWrapper, MentionsWrapper } from "./style";
import Text from "../../shared/text";

const Mentions = () => {
  const brands = [
    { img: "/imgs/twice.svg", alt: "Twice logo" },
    { img: "/imgs/accesswire.svg", alt: "Accesswire logo" },
    { img: "/imgs/magenta.svg", alt: "Magenta logo" },
  ];

  return (
    <MentionsWrapper>
      <Text type="h3" align="center">
        Notable Mentions
      </Text>
      <BrandsWrapper>
        {brands.map((brand, i) => (
          <Image
            key={i}
            src={brand.img}
            alt={brand.alt}
            width="256"
            height="64"
            layout="raw"
          />
        ))}
      </BrandsWrapper>
      <DotWrapper>
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper>
    </MentionsWrapper>
  );
};

export default Mentions;
