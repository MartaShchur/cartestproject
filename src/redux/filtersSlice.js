import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: " filters",
  initialState: {
    filters: {
      selectedMake: "",
      selectedPrice: "",
      minMileage: "",
      maxMileage: "",
    },
    filtersFavourite: {
      selectedMake: "",
      selectedPrice: "",
      minMileage: "",
      maxMileage: "",
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },   
    setFiltersFavourite: (state, action) => {
      state.filtersFavourite = {
        ...state.filtersFavourite,
        ...action.payload,
      };
    },
  },
});

export const {
  setFilters,
  resetFilters,
  setFiltersFavourite,
  resetFiltersFavourite,
} = filterSlice.actions;


export const filterReducer = filterSlice.reducer;