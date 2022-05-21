import styled from "styled-components";
import { FeaturesCard } from "../Features/style";

export const ReferencesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 24px;
`;

export const ReferencesCard = styled.div`
  margin: 10px 5px;
  display: flex;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 5px -7px rgba(0, 0, 0, 0.08);
  min-height: 175px;
  & > div {
    margin-left: 25px;
  }
  @media (max-width: 640px) {
    flex-direction: column;
    padding: 20px 10px;
    justify-content: space-around;
    min-height: 250px;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 24px -7px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
`;

export const ReferencesHeading = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #031e30;
  margin-bottom: 5px;
`;

export const ReferencesText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  color: #605e5c;
`;

export const LeftArrow = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ##0a71b7;
  background-image: url("/icons/right.svg");
  position: absolute;
  z-index: 5;
  right: 0px;
  margin-right: 36px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 640px) {
    right: -50px;
  }
`;

export const RightArrow = styled(LeftArrow)`
  background-image: url("/icons/left.svg");
  margin-left: 36px;
  left: 0px;
  @media (max-width: 640px) {
    left: -50px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  @media (max-width: 640px) {
    padding: 0;
  }
`;
