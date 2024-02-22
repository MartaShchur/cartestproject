import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65d747d027d9a3bc1d7aa0e2.mockapi.io/api/v1/";


export const setAdverts = createAsyncThunk(
  "catalog/fetchAdverts",
  async (page, thunkAPI) => {
    try {
      const res = await axios.get("/adverts", {
        params: { page: page, limit: 4 },
      });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const setAllAdverts = createAsyncThunk(
  "catalog/fetchAllAdverts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/adverts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);