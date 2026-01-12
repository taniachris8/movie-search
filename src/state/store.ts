import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice"
import searchedMovieReducer from "./searchedMoviesSlice"
import movieDetailsReducer from "./movieDetailsSlice"
import favoritesReducer from "./favoritesSlice"

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    movies: searchedMovieReducer,
    movie: movieDetailsReducer,
    favorites: favoritesReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
