import { createSlice } from "@reduxjs/toolkit";
import type { MovieSearchResult } from "../MovieTypes";

type FavoritesState = {
  favoritesList: MovieSearchResult[];
};

const initialState: FavoritesState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesList: (state, action) => {
      const movie = action.payload;
      if (state.favoritesList.some((m) => m.imdbID === movie.imdbID)) {
        state.favoritesList = state.favoritesList.filter(
          (m) => m.imdbID !== movie.imdbID
        );
      } else {
        state.favoritesList.push(movie);
      }
    },
  },
});

export const { setFavoritesList } = favoritesSlice.actions;

export default favoritesSlice.reducer;
