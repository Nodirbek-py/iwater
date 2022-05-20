import { Line, Stack } from "./style";

const Hamburger = ({ handler, status }) => {
  return (
    <Stack onClick={() => handler(!status)}>
      <Line rotate={status && "45"} />
      {!status && <Line />}
      <Line rotate={status && "-45"} />
    </Stack>
  );
};

export default Hamburger;
