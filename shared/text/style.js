import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  font-size: 72px;
  color: #123a55;
`;

export const Heading1 = styled(Heading)`
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading2 = styled(Heading)`
  font-size: 60px;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading3 = styled(Heading)`
  font-size: 48px;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 25px;
  color: #0b1725;
  text-align: ${(props) => (props.align ? props.align : "left")};
`;
