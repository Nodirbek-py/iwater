import styled from "styled-components";

export const FAQWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 140px;
  padding: 0 24px;
`;

export const CollapseWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 60px;
`;

export const Collapse = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px 40px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 24px -7px rgba(0, 0, 0, 0.08);
`;

export const CollapseHeading = styled.h2`
  color: #123a55;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const CollapseContent = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #123a55;
`;

export const CollapseButton = styled.button`
  margin-right: 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: #123a55;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  width: max-content;
`;
