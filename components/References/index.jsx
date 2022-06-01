import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  ReferencesWrapper,
  LeftArrow,
  RightArrow,
  SliderWrapper,
  ReferencesCard,
  ReferencesHeading,
  ReferencesText,
} from "./style";
import Text from "../../shared/text";
import useWindowDimensions from "../Navbar/hook";

const References = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { width } = useWindowDimensions();

  const references = [
    {
      img: "/icons/boxotel.png",
      alt: "Boxotel - logo",
      heading: "Boxotel",
      text: "We are happy with iWater tech, we observed water saving without compromising on shower experience.",
    },
    {
      img: "/icons/jen.png",
      alt: "Hotel Jen - logo",
      heading: "Hotel Jen",
      text: "We realized 20% savings in 1 month with iWater's WES device.",
    },
  ];

  return (
    <ReferencesWrapper id="testimonials">
      <Text type="h3" align="center">
        References
      </Text>
      <Text type="p" align="center">
        Look what our cutomers are saying about their iWater Experiance
      </Text>
      <SliderWrapper>
        <LeftArrow ref={navigationPrevRef} />
        <Swiper
          spaceBetween={40}
          slidesPerView={width > 840 ? 2 : 1}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation]}
        >
          {references.map((reference, i) => {
            return (
              <SwiperSlide key={i}>
                <ReferencesCard>
                  <Image
                    src={reference.img}
                    alt={reference.alt}
                    layout="raw"
                    width="90"
                    height="90"
                  />
                  <div>
                    <ReferencesHeading>{reference.heading}</ReferencesHeading>
                    <ReferencesText>{reference.text}</ReferencesText>
                  </div>
                </ReferencesCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <RightArrow ref={navigationNextRef} />
      </SliderWrapper>
    </ReferencesWrapper>
  );
};

export default References;
