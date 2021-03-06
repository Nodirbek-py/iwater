import styled from "styled-components";

const Heading = styled.h1`
  font-weight: 700;
  color: #123a55;
  font-size: 72px;
  line-height: 80px;
  @media (max-width: 1024px) {
    font-size: 60px;
    line-height: 70px;
  }
`;

export const Heading1 = styled(Heading)`
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading2 = styled(Heading)`
  font-size: 60px;
  line-height: 72px;
  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Heading3 = styled(Heading)`
  font-size: 48px;
  line-height: 60px;
  @media (max-width: 1024px) {
    font-size: 36px;
    line-height: 48px;
  }
  text-align: ${(props) => (props.align ? props.align : "left")};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  color: #0b1725;
  text-align: ${(props) => (props.align ? props.align : "left")};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
