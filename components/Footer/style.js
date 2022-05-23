import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #f1f4f9;
  padding: 90px 24px;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
`;

export const FooterColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 250px;
`;

export const FooterCopyright = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #1c2c40;
  margin-top: 24px;
`;

export const FooterHeading = styled.h4`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
  margin-bottom: 15px;
`;

export const FooterLink = styled.p`
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #2f2f2f;
  margin: 4px 0;
`;
