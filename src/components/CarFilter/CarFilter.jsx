import React, { useEffect, useState } from "react";
import makes from "../../db/makes.json";
import SelectPrice from "../../helpers/SelectPrice/SelectPrice";
import SelectBrand from "../../helpers/SelectBrand/SelectBrand";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { resetFilters } from "../../redux/filtersSlice";
import {
  InputDiv,
  InputPl,
  InputLeft,
  InputRight,
} from "../CarFilter/CarFilter.styled";

const CarFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

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
    dispatch(resetFilters());
  };

  return (
    <form onSubmit={handleFormSubmit} >
      <div >
        <label >Car brand</label>
        <SelectBrand
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          makes={makes}
        />
      </div>

      <div >
        <label >Price/ 1 hour</label>
        <SelectPrice
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </div>

      <div >
        <label >Car mealege / km</label>

        <div>
          <div>
            <InputDiv>
              <InputPl>From</InputPl>
              <InputLeft
                type="number"
                value={minMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 1);
                  setMinMileage(value);
                }}
              />
            </InputDiv>
            <InputDiv>
              <InputPl>To</InputPl>
              <InputRight
                type="number"
                value={maxMileage}
                onChange={(e) => {
                  const value = Math.max(e.target.value, 1);
                  setMaxMileage(value);
                }}
              />
            </InputDiv>
          </div>
        </div>
      </div>
      <button type="submit">
        Search
      </button>
      <button type="reset" onClick={clearFilters} >
        Reset
      </button>
    </form>
  );
};
export default CarFilter;