import "./App.css";
import { Container } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./state/hooks";
import { useEffect, useState } from "react";
import { fetchMovies } from "./state/searchedMoviesSlice";
import { NavbarComponent } from "./components/Navbar";
import { SearchInput } from "./components/SearchInput";
import { MovieList } from "./components/MovieList";

export default function App() {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchMovies(searchTerm));
    }
  }, [searchTerm]);

  const movies = useAppSelector((state) => state.movies);

  return (
    <>
      <Container
        style={{
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}>
        <NavbarComponent />
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        {searchTerm && (
          <MovieList
            list={movies.data}
            status={movies.status}
            error={movies.error}
          />
        )}
      </Container>
    </>
  );
}
