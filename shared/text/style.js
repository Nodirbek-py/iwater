import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  color: #123a55;
  font-size: 60px;
  @media (min-width: 1024px) {
    font-size: 72px;
  }
`;

export const Heading1 = styled(Heading)`
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading2 = styled(Heading)`
  font-size: 48px;
  @media (min-width: 1024px) {
    font-size: 60px;
  }
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading3 = styled(Heading)`
  font-size: 36px;
  @media (min-width: 1024px) {
    font-size: 48px;
  }
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #0b1725;
  text-align: ${(props) => (props.align ? props.align : "left")};
  @media (min-width: 1024px) {
    font-size: 25px;
  }
`;
