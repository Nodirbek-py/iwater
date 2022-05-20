import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 0 24px;
  justify-content: center;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f1f4f905;
  border: 1px solid #ffffff;
  margin-top: 72px;
  height: 300px;
  width: 300px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16);
  img {
    width: 280px !important;
    height: 210px !important;
  }
  @media (min-width: 640px) {
    height: 500px;
    width: 500px;
    img {
      width: 420px !important;
      height: 350px !important;
    }
  }
`;
