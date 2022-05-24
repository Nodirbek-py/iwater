import { StyledButton } from "./style";

const Button = (props) => {
  return (
    <StyledButton style={props.style} {...props}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
