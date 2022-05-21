import Image from "next/image";

import Text from "../../shared/text";
import { TeamWrapper, TeamCards, TeamCard, TeamCardHeading } from "./style";

const Team = () => {
  const team = [
    {
      img: "/icons/globe.png",
      text: "Sustainability",
    },
    {
      img: "/icons/handshake.png",
      text: "Trust",
    },
    {
      img: "/icons/drop.png",
      text: "Water Saving",
    },
  ];

  return (
    <TeamWrapper>
      <Text type="h3" align="center">
        Our Team
      </Text>
      <Text type="p" align="center">
        Our team is comprised of passionate, gritty, and empathetic individuals
        pursuing a better tomorrow, today. We are experts in our fields and
        enjoy working withindustry partners to develop market changing
        innovations.
      </Text>
      <TeamCards>
        {team.map((item, i) => {
          return (
            <TeamCard key={i}>
              <Image
                src={item.img}
                alt={item.text}
                height="190"
                width="190"
                layout="raw"
              />
              <TeamCardHeading>{item.text}</TeamCardHeading>
            </TeamCard>
          );
        })}
      </TeamCards>
    </TeamWrapper>
  );
};

export default Team;
