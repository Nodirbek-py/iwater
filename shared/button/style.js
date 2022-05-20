import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 99px;
  font-size: 14px;
  padding: 10px 35px;
  background-color: transparent;
  color: #0a71b7;
  border: 1px solid #0a71b7;
  &:hover {
    transition: all 0.5s;
    cursor: pointer;
    color: #fff;
    background-color: #0a71b7;
  }
  @media (min-width: 640) {
    font-size: 18px;
  }
`;

export { StyledButton };
