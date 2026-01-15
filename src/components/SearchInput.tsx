import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../state/hooks";
import { setSearchTerm } from "../state/filterSlice";

type SearchInputProps = {
  searchTerm: string;
};

export function SearchInput({ searchTerm }: SearchInputProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      <Form style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Form.Control
          type="text"
          name="movieName"
          className="search-input bg-dark text-light"
          placeholder="Поиск фильма..."
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          value={searchTerm}
        />
      </Form>
    </>
  );
}
