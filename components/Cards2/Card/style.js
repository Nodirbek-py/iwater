import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: red;
  border-radius: 20px;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: ${({ cardType }) => (cardType === 1 ? "-100" : "-120")}px;
`;

export const ContentWrapper = styled.div`
  padding-top: ${({ cardType }) => (cardType === 1 ? "150" : "190")}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: 15px;
    width: 70%;
    text-align: center;
  }

  & > button {
    margin: 20px 0 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0 14px;

  & > p {
    font-size: 15px;
    width: 90%;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 20px;

  & > p {
    font-size: 12px;
  }
`;

export const UList = styled.div`
  margin-top: 20px;
  display: inline-block;

  & li {
  }

  & p {
    font-size: 15px;
  }
`;
