import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 30px 40px;
  color: #123a55;

  & > h1 {
    @media (max-width: 500px) {
      font-size: 40px;
    }
  }

  & button {
    width: fit-content;
    background-color: #0a71b7;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #0a71b7;
    }
  }
`;

export const Question = styled.div`
  padding: 12px 30px;
  width: fit-content;
  border-radius: 10px;
  font-size: 24px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    font-size: 21px;
  }
`;

export const RadiosWrapper = styled.div`
  padding: 20px 0 30px;
`;

export const RadioButton = styled.div`
  display: inline-block;
  font-size: 21px;
  margin-left: 30px;
  margin-top: 10px;

  & span {
    margin-left: 10px;
  }

  & label {
    cursor: pointer;
  }
`;
