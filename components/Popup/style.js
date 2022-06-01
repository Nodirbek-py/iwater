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
      font-size: 24px;
    }
  }

  & button {
    width: fit-content;
    background-color: #0a71b7;
    color: #fff;

    &:hover {
      cursor: pointer
      background-color: #fff;
      color: #0a71b7;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > input {
    width: 48%;
  }
`;

export const Question = styled.div`
  padding: 6px 24px;
  width: fit-content;
  border-radius: 10px;
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 840px) {
    font-size: 16px;
    padding: 5px 15px;
  }
`;

export const RadiosWrapper = styled.div`
  padding: 10px 0 20px;
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
