import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { MovieDetails } from "../MovieTypes";

const url = "https://www.omdbapi.com?apikey=64405bd2&i=";

export const fetchMovieDetails = createAsyncThunk(
  "movie/details",
  async (id: string) => {
    const response = await fetch(url + id);
    const result = await response.json();
    return result;
  }
);

interface MovieDetailsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: MovieDetails | null;
}

const initialState: MovieDetailsState = {
  status: "idle",
  data: null,
};

const movieDetailsSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchMovieDetails.fulfilled,
        (state, action: PayloadAction<MovieDetails>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchMovieDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default movieDetailsSlice.reducer;
