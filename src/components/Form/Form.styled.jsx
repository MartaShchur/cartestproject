import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 10px 16px;

  /* color:#2b2b2b; */

  /* background: #2b2b2b; */
  border-radius: 10px;

  :active,
  :focus,
  :hover {
    color: #2b2b2b;
  }
`;

export const ButtonSearch = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  margin-left: 12px;
  padding: 10px 16px;
  border-radius: 10px;

  :not(:disabled):active,
  :focus,
  :not(:disabled):hover {
    color: #2b2b2b;
  }
`;