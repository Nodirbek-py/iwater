import styled from "styled-components";

export const TeamWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 24px;
`;

export const TeamCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TeamCard = styled.div`
  min-height: 380px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  background: #0a71b7;
  margin: 0 12px;
  img {
    width: auto !important;
    height: auto !important;
    transform: scale(1.7);
    margin-top: 100px;
    @supports (-ms-ime-align: auto) {
      margin-top: 50px;
      transform: scale(1);
    }
  }
  @media (max-width: 1024px) {
    margin: 30px 0;
  }
`;

export const TeamCardHeading = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.04em;
  color: #ffffff;
  padding-top: 25px;
  margin-top: 32px;
  width: 100%;
  border-top: 0.75px solid #fff;
`;
