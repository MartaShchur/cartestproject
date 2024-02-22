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
    filtersFavorite: {
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
    setFiltersFavorite: (state, action) => {
      state.filtersFavorite = {
        ...state.filtersFavorite,
        ...action.payload,
      };
    },
  },
});

export const { setFilter, setFiltersFavorite, } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;