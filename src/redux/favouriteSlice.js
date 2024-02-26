import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: [],
  },
  reducers: {
    addToFavourites: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;

export const favouriteReducer = favouriteSlice.reducer;