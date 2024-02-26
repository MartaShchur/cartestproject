import styled from "styled-components";

export const InputDiv = styled.div`
  position: relative;
`;

export const InputPl = styled.div`
  position: absolute;
  top: 18px;
  left: 14px;
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputLeft = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 54px;
  padding: 14px 24px 14px 62px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const InputRight = styled.input`
  border: none;
  outline: none;
  width: 160px;
  height: 54px;
  padding: 14px 24px 14px 38px;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;
  font-family: "Manrope", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const ButtonSearch = styled.button`
border-radius: 12px;
  background: white;
  padding: 14px 44px;
  height: 52px;
  color: var(--White, #fff);
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
.btn_Search:hover,
.btn_Search:focus,
.closeBtn:hover,
.closeBtn:focus {
    background: white;
}
`;