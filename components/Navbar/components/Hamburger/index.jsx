import { Line, Stack } from "./style";

const Hamburger = ({ handler, status }) => {
  return (
    <Stack onClick={() => handler(!status)}>
      <Line rotate={status ? "45" : null} />
      {!status && <Line />}
      <Line rotate={status ? "-45" : null} />
    </Stack>
  );
};

export default Hamburger;
