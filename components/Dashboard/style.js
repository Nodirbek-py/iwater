import styled from "styled-components";

export const DashboardWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  h1,
  p {
    text-align: center;
  }
  div{
      margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    div {
      width: 35%;
    }
    h1,
    p {
      text-align: left;
    }
  }
`;
