import React from "react";
import CarItem from "../../components/CarItem/CarItem";
import { useSelector, useDispatch } from "react-redux";
import { setFiltersFavourite } from "../../redux/filtersSlice";
import Favourite from "../../pages/Favourite/Favourite";
import { filtersFavourite, selectFavourites } from "../../redux/selectors.js";


const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const filters = useSelector(filtersFavourite);

  const handleFilterChange = (filters) => {
    dispatch(setFiltersFavourite(filters));
  };

  const filteredFavourites = favourites.filter((advert) => {
    if (filters.selectedMake && advert.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(advert.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && advert.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && advert.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <formWrapper>
      <selectWrapperForm>
        {filteredFavourites.length > 0 ? (
          <advertsList>
            {filteredFavourites.map((advert) => (
              <CarItem key={advert.id} advert={advert} />
            ))}
          </advertsList>
        ) : (
          <noMatching>Sorry, no matching favorites found</noMatching>
        )}
      </selectWrapperForm>
      <Favourite onFilterChange={handleFilterChange} />
    </formWrapper>
  );
}

export default Favourites;