import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';
import { favouriteReducer } from './favouriteSlice';


export const store = configureStore({
    reducer: {
    favorite: favouriteReducer,
    cars: carsReducer,
    filters: filterReducer,
  },

 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});