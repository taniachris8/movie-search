import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Movie } from "../components/Movie";
import { NavbarComponent } from "../components/Navbar";
import { useAppSelector } from "../state/hooks";
import type { MovieSearchResult } from "../MovieTypes";

export function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorites.favoritesList);

  return (
    <>
      <Container
        style={{
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "50px",
        }}>
        <NavbarComponent />
        <Row>
          {favorites.length === 0 && (
            <p style={{ color: "white", marginTop: "30px" }}>
              No movie has been added to Favorites
            </p>
          )}
          {favorites &&
            favorites.map((movie: MovieSearchResult) => (
              <Col key={movie.imdbID} xs={6} md={4}>
                <Movie data={movie} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}
