import styled from "styled-components";

export const ImageWrapper = styled.div`
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16), 0px 4px 14px rgba(0, 0, 0, 0.16);
  background: #f1f4f950;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BuyWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  & > div {
    width: 45%;
  }
  & > div:nth-of-type(1) {
    display: flex;
    width: 55%;
    justify-content: space-between;
    align-items: center;
    margin-right: 60px;
  }
  @media (max-width: 1024px) {
    ${ImageWrapper} {
      padding: 10px;
    }
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > div {
      width: 100% !important;
      justify-content: space-around !important;
      margin-right: 0px !important;
      margin-bottom: 50px;
    }
  }
`;

export const VerticalImages = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  gap: 16px;
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
`;

export const BuyHeadings = styled.h3`
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
  color: #3b3a39;
`;
