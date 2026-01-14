import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../state/hooks";
import { fetchMovies } from "../state/searchedMoviesSlice";

type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchInput({ searchTerm, setSearchTerm }: SearchInputProps) {
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchMovies(searchTerm));
  };

  return (
    <>
      <Form
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
        onSubmit={handleSearch}>
        <Form.Control
          type="text"
          name="movieName"
          className="search-input bg-dark text-light"
          placeholder="Поиск фильма..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </Form>
    </>
  );
}
