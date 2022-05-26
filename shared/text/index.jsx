import { Heading1, Heading2, Heading3, Description } from "./style";

const Text = ({ type, children, align }) => {
  if (type === "h1") {
    return <Heading1 align={align}>{children}</Heading1>;
  } else if (type === "h2") {
    return <Heading2 align={align}>{children}</Heading2>;
  } else if (type === "h3") {
    return <Heading3 align={align}>{children}</Heading3>;
  } else {   
    return <Description align={align}>{children}</Description>;
  }
};

export default Text;
