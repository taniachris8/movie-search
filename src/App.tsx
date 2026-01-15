import "./App.css";
import { Container } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "./state/hooks";
import { useEffect } from "react";
import { fetchMovies } from "./state/searchedMoviesSlice";
import { NavbarComponent } from "./components/Navbar";
import { SearchInput } from "./components/SearchInput";
import { MovieList } from "./components/MovieList";

export default function App() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.filter.searchTerm);

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const timeoutId = setTimeout(() => {
      dispatch(fetchMovies(searchTerm));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, dispatch]);

  const movies = useAppSelector((state) => state.movies);
  console.log(movies.data)

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
        <SearchInput searchTerm={searchTerm} />
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
