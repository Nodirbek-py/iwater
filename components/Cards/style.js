import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 12px;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    padding: 0 24px;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 18px;
  padding: 15px;
  background: #fefeff;
  box-shadow: 0px 3px 20px -6px rgba(0, 0, 0, 0.08);
  img {
    width: 40px !important;
    height: 40px !important;
  }
  p {
    margin-top: 16px;
  }
  @media (min-width: 640px) {
    min-width: 250px;
    padding: 15px 30px;
    img {
      width: 61px !important;
      height: 61px !important;
    }
  }
  @media (min-width: 1024px) {
    min-width: 250px;
    padding: 30px 60px;
    img {
      width: 61px !important;
      height: 61px !important;
    }
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    width: 65%;
    gap: 24px;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  margin-bottom: 60px;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;
