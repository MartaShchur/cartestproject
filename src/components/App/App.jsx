import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';


const Home = lazy(() => import('pages/Home/Home'));
const Car = lazy(() => import('pages/Cars/Cars'));
const Favourite = lazy(() => import('pages/Favourite/Favourite'));


const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="/favorites" element={<Favourites />} />
    //     <Route path="/cars" element={<Cars />} />
          
    //     </Route>
    // </Routes>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cars" element={<Car/>} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;