import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 140px;
  margin-bottom: 210px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContactForm = styled.div`
  margin-top: 40px;
  padding: 48px;
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));
  border-radius: 28px;
  background: #f1f4f970;
  backdrop-filter: blur(4px);
  max-width: 520px;
`;

export const FormHeading = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.04em;
  color: #1c2c40;
  margin-bottom: 12px;
  text-align: center;
`;

export const ContactInput = styled.input`
  outline: none;
  border: none;
  margin: 12px 0;
  width: 100%;
  background: #fefeff;
  border-radius: 16px;
  padding: 16px 24px 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #1c2c4060;
`;

export const ContactTextarea = styled.textarea`
  outline: none;
  border: none;
  margin: 12px 0;
  width: 100%;
  background: #fefeff;
  border-radius: 16px;
  padding: 16px 24px 12px 16px;
  font-weight: 400;
  font-size: 14px;
  font-family: "Poppins", "Helvetica Neue", "Helvetica";
  line-height: 20px;
  letter-spacing: -0.04em;
  color: #1c2c4060;
  resize: none;
`;
