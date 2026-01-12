import './App.css'
import { useAppSelector, useAppDispatch } from './state/hooks';
import { useEffect } from 'react';
import { fetchMovies } from './state/searchedMoviesSlice';
import { NavbarComponent } from './components/Navbar';
import { SearchInput } from './components/SearchInput';
import { MovieList } from './components/MovieList';
import { Container } from 'react-bootstrap';

export default function App() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.filter.searchTerm)
  console.log("searchTerm", searchTerm);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchMovies(searchTerm));
    }
  }, [searchTerm]);

   const movies = useAppSelector((state) => state.movies);
  const movie = useAppSelector((state) => state.movie.data);
  const favorites = useAppSelector((state) => state.favorites)
  console.log("favorites", favorites)
   console.log("movies", movies);
   console.log("movie", movie);

  return (
    <>
      <Container style={{ maxWidth: "1000px", display: "flex", flexDirection:"column", gap: "20px" }}>
        <NavbarComponent />
        <SearchInput searchTerm={searchTerm} />
        <MovieList list={movies.data} status={movies.status} />
      </Container>
    </>
  );
}

