import Cars from "../Cars/Cars.jsx"
import CarFilter from "../../CarFilter/CarFilter.jsx"
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../components/CarFilter/CarFilter.jsx";
import { selectAdverts } from "../../redux/selectors.js";


const CarPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };
  
  return (
    <div>
      <CarFilter adverts={adverts} onFilterChange={handleFilterChange} />
      <Cars />
    </div>
  )
}

export default CarPage;