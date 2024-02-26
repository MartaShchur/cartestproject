import React, { useEffect, useState } from "react";
import makes from "../../db/makes.json";

import MySelectFav from "../../helpers/SelectFavourite";
import MySelectMakeFav from "../../helpers/SelectBrandFavorite/SelectBrandFavorite";
import { useDispatch, useSelector } from "react-redux";
import { filtersFavourite } from "../../redux/selectors";
import { resetFiltersFavourite } from "../../redux/filtersSlice";


const Favourite = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector(filtersFavourite);

  useEffect(() => {
    setSelectedMake(filters.selectedMake);
    setSelectedPrice(filters.selectedPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);
  }, [
    filters.maxMileage,
    filters.minMileage,
    filters.selectedMake,
    filters.selectedPrice,
    filters.setMaxMileage,
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      minMileage,
      maxMileage,
    };

    onFilterChange(filters);
  };

  const clearFilters = (e) => {
    e.preventDefault();
    console.log("clear");
    dispatch(resetFiltersFavourite());
  };

  return (
    <div>
      <filterForm onSubmit={handleFormSubmit}>
        <selectWrapper >
          <lableTitle >Car brand</lableTitle>
          <MySelectMakeFav
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            makes={makes}
          />
        </selectWrapper>
        <selectWrapper>
          <lableTitle>Price/ 1 hour</lableTitle>

          <MySelectFav
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </selectWrapper>
        
        <selectWrapper>
          <lableTitle>Сar mileage / km</lableTitle>

          <div>
            <inputWrapper>
              <nputWrapper>From</nputWrapper>
              <leftInput
                type="number"
                name="minMileage"
                value={minMileage}
                onClick={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMinMileage(value);
                }}
              />
            </inputWrapper>
            <inputWrapper>
              <inputName>To</inputName>
              <rigthInput
                type="number"
                value={maxMileage}
                onClick={(e) => {
                  const value = Math.max(e.target.value, 0);
                  setMaxMileage(value);
                }}
              />
            </inputWrapper>
          </div>
        </selectWrapper>
        <btnSearch type="submit">Search</btnSearch>
        <closeBtn onClick={clearFilters}>Clear</closeBtn>
      </filterForm>
    </div>
  );
};

export default Favourite;