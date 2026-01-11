import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { MovieDetails } from "../MovieTypes";
import type { DetailsResponse } from "../MovieTypes";

const url = "https://www.omdbapi.com?apikey=64405bd2&i=";

export const fetchMovieDetails = createAsyncThunk(
  "movie/details",
  async (id: string) => {
    const response = await fetch(url + id);
    console.log("url", url + id);
    return response.json();
  }
);

interface MovieDetailsState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: MovieDetails | null;
  error: string | null;
}

const initialState: MovieDetailsState = {
  status: "idle",
  data: null,
  error: null,
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
          console.log("from thunk", action.payload);
          state.data = action.payload;
        }
      )
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Неизвестная ошибка";
      });
  },
});

export default movieDetailsSlice.reducer;
