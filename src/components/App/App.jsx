import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Catalog from "../../pages/Catalog/Catalog";
import Favorite from "../../pages/Favourite/Favourite";
import Layout from "../Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favourites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;