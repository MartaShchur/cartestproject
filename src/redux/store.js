import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { carsReducer } from './carSlice';
import { filterReducer } from './filtersSlice';
import { favouriteReducer } from './favouriteSlice';


const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedUserReducer = persistReducer(
  favoritePersistConfig,
  favouriteReducer
);

export const store = configureStore({
  reducer: {
    favourite: persistedUserReducer,
    cars: carsReducer,
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["transactions.date"],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);