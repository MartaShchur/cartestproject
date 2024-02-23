import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Container, NavList, Navigation } from './Layout.styled';

export const Layout = () => {
   return (
    <Container>
      <header>
        <Navigation>
          <NavList>
              <Link to="/">
                Home
              </Link>
              <Link to="/cars">
                Cars
             </Link>
             <Link to="/favorites">
               Favourites
              </Link>
          </NavList>
        </Navigation>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};