import Link from "next/link";

import { StyledButton } from "./style";

const Button = (props) => {
  return props.href ? (
    <Link href={props.href}>
      <StyledButton onClick={props.onClick} style={props.style}>
        {props.text}
      </StyledButton>
    </Link>
  ) : (
    <StyledButton onClick={props.onClick} style={props.style}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
