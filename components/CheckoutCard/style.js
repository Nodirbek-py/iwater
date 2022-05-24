import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 757px;
  margin: 0 auto;
  margin-top: 210px;
  text-align: center;
  padding: 0 40px;

  & > div {
    padding: 0 50px;

    @media (max-width: 640px) {
      padding: 0;
    }

    @media (max-width: 440px) {
      height: 690px;
    }
  }

  & .price-wrapper {
    bottom: 100px;

    @media (max-width: 440px) {
      bottom: 20px;
    }
  }

  & .ulist {
    @media (min-width: 440px) {
      margin-top: 60px;
    }
  }
`;
