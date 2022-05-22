import {
  FeaturesWrapper,
  FeaturesGrid,
  FeaturesCard,
  FeaturesHeading,
  FeaturesText,
} from "./style";
import Text from "../../shared/text";

const features = [
  {
    heading: "01 Water Monitoring ",
    text: "Water monitoring leading to predictive utility usage and water savings.",
  },
  {
    heading: "02 Real-time Analytics",
    text: "Wifi connected device that gives real time analytics to allow deeper insight into utility usage.",
  },
  {
    heading: "03 Set it and Forget it",
    text: "Powered by 2 AA batteries, our device can take intelligence action for years to mitigate water waste.",
  },
  {
    heading: "04 Instant Results",
    text: "You realize savings instantly and start saving on day 1. ",
  },
  {
    heading: "05 No Interaction",
    text: "Our device requires no interaction, simply do what you have always done. ",
  },
  {
    heading: "06 No Renovation",
    text: "We don’t require a renovation, we don’t change pressure, temperature or shower head. ",
  },
];

const Features = () => {
  return (
    <FeaturesWrapper>
      <Text type="h3" align="center">
        Features & Benefits
      </Text>
      <Text type="p" align="center">
        Take control of your water consumption and energy usage with iWater’s
        intelligent utility management system.
      </Text>
      <FeaturesGrid>
        {features.map((feature, i) => (
          <FeaturesCard key={i}>
            <FeaturesHeading>{feature.heading}</FeaturesHeading>
            <FeaturesText>{feature.text}</FeaturesText>
          </FeaturesCard>
        ))}
      </FeaturesGrid>
    </FeaturesWrapper>
  );
};

export default Features;
