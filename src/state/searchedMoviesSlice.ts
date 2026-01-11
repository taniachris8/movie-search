import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { SearchResponse } from "../MovieTypes";
import type { MovieSearchResult } from "../MovieTypes";

const url = "https://www.omdbapi.com?apikey=64405bd2&s=";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm: string) => {
    const response = await fetch(url + searchTerm);
    return response.json();
  }
);

interface MoviesState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: MovieSearchResult[];
  error: string | null;
}

const initialState: MoviesState = {
  status: "idle",
  data: [],
  error: null,
};

const searchedMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<SearchResponse>) => {
        state.status = "succeeded";
        state.data = action.payload.Search;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Неизвестная ошибка";
      });
  },
});

export default searchedMoviesSlice.reducer;
