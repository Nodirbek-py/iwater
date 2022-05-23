import styled from "styled-components";

import { colors } from "../config";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border-radius: 20px;
  height: ${({ cardType }) => (cardType === "1" ? "570" : "808")}px;
  background-color: ${({ cardType }) => colors[cardType].background};
  color: ${({ cardType }) => colors[cardType].text};

  & p {
    color: ${({ cardType }) => colors[cardType].text};
  }

  & h1 {
    color: ${({ cardType }) => colors[cardType].text};
    font-size: 36px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: ${({ cardType }) => (cardType === "1" ? "-100" : "-120")}px;
`;

export const ContentWrapper = styled.div`
  padding-top: ${({ cardType }) => (cardType === "1" ? "150" : "190")}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-size: 15px;
    width: 80%;
    text-align: center;
  }

  & button {
    margin: 20px 0 20px;
    background-color: ${({ cardType }) => colors[cardType].text};
    color: ${({ cardType }) => colors[cardType].background};
    border-color: transparent;

    &:hover {
      background-color: ${({ cardType }) => colors[cardType].background};
      color: ${({ cardType }) => colors[cardType].text};
      border-color: ${({ cardType }) => colors[cardType].text};
    }
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

export const PriceWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 40px;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;

  & > p {
    font-size: 12px;
  }
`;

export const UList = styled.div`
  margin-top: 20px;
  padding: 0 20px;

  & li {
    font-size: 15px;
    line-height: 26px;
    word-break: break-word;
  }
`;
