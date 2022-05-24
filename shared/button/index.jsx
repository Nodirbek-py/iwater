import Link from "next/link";

import { StyledButton } from "./style";

const Button = (props) => {
  return (
    <Link href={props.href ? props.href : "/"}>
      <StyledButton style={props.style}>{props.text}</StyledButton>
    </Link>
  );
};

export default Button;
