import Cars from "../Cars/Cars.jsx"
import CarFilter from "../../components/CarFilter/CarFilter.jsx"
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/filtersSlice.js";
import { selectCars } from "../../redux/selectors.js";


const CarPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };
  
  return (
    <div>
      <CarFilter cars={cars} onFilterChange={handleFilterChange} />
      <Cars />
    </div>
  )
}

export default CarPage;