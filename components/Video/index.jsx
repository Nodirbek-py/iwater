import Image from "next/image";

import { VideoWrapper, BlueText } from "./style";
import Text from "../../shared/text";

const Video = () => {
  return (
    <VideoWrapper>
      <Image
        src="/imgs/video.png"
        width="1100"
        height="600"
        alt="iWater - Video about the product"
      />
      <Text h3>
        Average <BlueText>20%</BlueText> Savings Per Hotel Client
      </Text>
    </VideoWrapper>
  );
};

export default Video;
