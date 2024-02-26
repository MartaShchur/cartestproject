export const selectFavourites = (state) => state.favorite.favourites;

export const selectAdverts = (state) => state.car.adverts;
export const selectAllAdverts = (state) => state.car.allAdverts;
export const selectIsLoading = (state) => state.car.isLoading;
export const selectError = (state) => state.car.error;
export const selectPage = (state) => state.car.page;

export const selectFilters = (state) => state.filters.filters;
export const filtersFavourite = (state) => state.filters.filtersFavourite;