import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Cast = lazy(() => import('components/Button/Button'));
const Reviews = lazy(() => import('components/Modal/Modal'));
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Car = lazy(() => import('pages/Cars/Cars'));
const Favourite = lazy(() => import('pages/Favourite/Favourite'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index element={<Favourite />} />

        <Route path="/movies" element={<Car />} />
          
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
    </Routes>
  );
};

export default App;