import styled from '@emotion/styled';



export const btn = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color:var(--pr-button-background-color);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}  
 .btn:hover,
 .btn:focus {
    background-color: #e3e314;
  }
`;