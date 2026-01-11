import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type { MovieSearchResult } from "../MovieTypes";
import { Movie } from "./Movie";

type MovieListProps = {
  list: MovieSearchResult[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

export function MovieList({ list, status }: MovieListProps) {
  if (status === "loading") return <p className="status loading">Loading...</p>;
  if (status === "failed")
    return (
      <p className="status failed">
        Произошла ошибка загрузки. Попробуйте позже
      </p>
    );

  if (status === "succeeded" && list?.length === 0)
    return <p className="status empty">Фильмы не найдены</p>;

  return (
    <>
      <Container>
        <Row>
          {list?.map((movie) => (
            <Col key={movie.imdbID} xs={6} md={4}>
              <Movie data={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
