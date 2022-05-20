import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Line = styled.span`
  ${(props) => props.rotate && `transform:rotate(${props.rotate}deg);`}
  display: block;
  background-color: #123a55;
  height: 3px;
  margin: 2px 0;
  ${(props) =>
    props.rotate
      ? props.rotate === "45"
        ? `margin-bottom: 4px;`
        : `margin-top: -6px}`
      : null}
  width: 24px;
  border-radius: 99px;
`;

export { Line, Stack };
