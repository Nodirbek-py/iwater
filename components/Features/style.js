import styled from "styled-components";
import { Heading1, Description } from "../../shared/text/style";

export const FeaturesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 24px;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  margin-top: 48px;
  @media (min-width: 860px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const FeaturesCard = styled.div`
  min-height: 130px;
  padding: 20px 50px;
  border-radius: 20px;
  background: #fefeff;
  box-shadow: 0px 4px 24px -7px rgba(0, 0, 0, 0.08);
  position: relative;
  bottom: 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 24px -7px rgba(0, 0, 0, 0.2);
    bottom: 5px;
    transition: all 0.2s;
  }
`;

export const FeaturesHeading = styled(Heading1)`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
`;

export const FeaturesText = styled(Description)`
  font-size: 16px;
  line-height: 24px;
`;
