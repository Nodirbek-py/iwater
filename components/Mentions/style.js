import styled from "styled-components";

export const MentionsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  @media (min-width: 1024px) {
    padding: 0 24px;
  }
`;

export const BrandsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 60px auto;
  overflow-x: auto;
  @media (min-width: 1024px) {
    width: 90%;
  }
  & > img {
    margin-left: 25px !important;
    margin-right: 25px !important;
    padding: 0 20px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

export const Dot = styled.span`
  display: block;
  background: #123a55;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  margin: 0 2.5px;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
