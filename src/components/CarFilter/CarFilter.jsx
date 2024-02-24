import React, { useEffect, useState } from "react";
import makes from "../../db/makes.json";
import SelectPrice from "../../helpers/SelectPrice/SelectPrice";
import SelectBrand from "../../helpers/SelectBrand/SelectBrand";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors.js";
// import { resetFilters } from "../../redux/filters/filtersSlice.jsx";
import {
  InputDiv,
  InputPl,
  InputLeft,
  InputRight,
} from "../CarFilter/CarFilter.styled";
import { ButtonSearch } from "components/Form/Form.styled";

const CarFilter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  // const dispatch = useDispatch();
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

  return (
    <filterForm onSubmit={handleFormSubmit}>
      <divWrapper>
        <labelTitle>Car brand</labelTitle>
        <SelectBrand
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
          makes={makes}
        />
      </divWrapper>

      <divWrapper>
        <labelTitle>Price/ 1 hour</labelTitle>
        <SelectPrice
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      </divWrapper>

      <divWrapper>
        <labelTitle> Car mealege / km</labelTitle>

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
      </divWrapper>
      <ButtonSearch type="submit">
        Search
      </ButtonSearch>
    </filterForm>
  );
};


export default CarFilter;