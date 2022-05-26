import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 200px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 140px 0;
  max-width: 345px;

  @media (min-width: 950px) {
    max-width: 880px;
    grid-template-columns: 1fr 1fr;
    gap: 140px 70px;
  }

  @media (min-width: 1450px) {
    max-width: 1400px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
