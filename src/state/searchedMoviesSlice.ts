import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { SearchResponse, MovieSearchResult } from "../movieTypes";

const url = "https://www.omdbapi.com?apikey=64405bd2&s=";

export const fetchMovies = createAsyncThunk<
  SearchResponse,
  string,
  { rejectValue: string }
>("movies/fetchMovies", async (searchTerm: string, { rejectWithValue }) => {
  const response = await fetch(url + searchTerm);
  const result: SearchResponse = await response.json();
  console.log("from fetchMovies func", result);
  if (result.Response === "False") {
    return rejectWithValue(result.Error as string);
  }
  return result;
});

interface MoviesState {
  status: "idle" | "loading" | "succeeded" | "failed";
  data: MovieSearchResult[];
  error: string;
}

const initialState: MoviesState = {
  status: "idle",
  data: [],
  error: "",
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
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<SearchResponse>) => {
          state.status = "succeeded";
          state.data = action.payload.Search;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message ?? "Unknown Error";
      });
  },
});

export default searchedMoviesSlice.reducer;
