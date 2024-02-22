import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  display: flex;
  gap:30px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

