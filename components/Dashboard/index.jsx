import Image from "next/image";

import { DashboardWrapper } from "./style";
import Text from "../../shared/text";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <div>
        <Text type="p">We use advanced Algorithms to evolve our</Text>
        <Text type="h2">Dashboard Insights</Text>
      </div>
      <Image
        src="/imgs/dashboard.png"
        alt="iWater - Dashboard image"
        width="720"
        height="420"
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
