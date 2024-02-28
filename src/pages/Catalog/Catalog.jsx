import Catalog from "../../components/Catalog/Catalog"
import CarFilter from "../../components/CarFilter/CarFilter"
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../redux/filtersSlice";
import { selectAdverts } from "../../redux/selectors";


const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };
  
  return (
    <div>
      <CarFilter adverts={adverts} onFilterChange={handleFilterChange} />
      <Catalog />
    </div>
  )
}

export default CatalogPage;