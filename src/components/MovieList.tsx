import type { MovieSearchResult } from "../MovieTypes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Movie } from "./Movie";
import { ErrorAlert } from "./ErrorAlert";
import { MoviePlaceholder } from "./placeholders/MoviePlaceholder";

type MovieListProps = {
  list: MovieSearchResult[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string
};

export function MovieList({ list, status, error }: MovieListProps) {
  return (
    <>
      <Container>
        <Row>
          {status === "failed" && error && <ErrorAlert error={error} />}
          {status === "loading" &&
            Array.from({ length: 6 }).map((_, idx) => (
              <Col key={idx} xs={12} sm={6} md={4} className="mb-4">
                <MoviePlaceholder />
              </Col>
            ))}
          {status === "succeeded" &&
            list?.map((movie) => (
              <Col key={movie.imdbID} xs={6} md={4} className="mb-4">
                <Movie data={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
