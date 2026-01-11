import { useAppDispatch } from "../state/hooks";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { setSearchTerm } from "../state/filterSlice";
import { fetchMovies } from "../state/searchedMoviesSlice";

type SearchInputProps = {
  searchTerm: string;
};

export function SearchInput({ searchTerm }: SearchInputProps) {
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <>
      <Form style={{display:"flex", gap: "10px"}} onSubmit={handleSearch}>
          <Form.Control
            type="text"
            name="movieName"
            className="search-input bg-dark text-light"
            placeholder="Поиск фильма..."
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            value={searchTerm}
          />
          <Button variant="info">Search</Button>
        </Form>
    </>
  );
}
