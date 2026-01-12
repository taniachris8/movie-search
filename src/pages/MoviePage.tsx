import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchMovieDetails } from "../state/movieDetailsSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { Container } from "react-bootstrap";
import { NavbarComponent } from "../components/Navbar";
import { FavoriteBtn } from "../components/FavoriteButton";
import { setFavoritesList } from "../state/favoritesSlice";

export function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  console.log("id", id);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id]);

  const movie = useAppSelector((state) => state.movie);
  console.log("movie from Movie page", movie);

  const favorites = useAppSelector((state) => state.favorites.favoritesList);
  const isFavorite = favorites.some(
    (item) => item.imdbID === movie.data?.imdbID
  );

  if (movie.status === "loading")
    return <p className="status loading">Loading...</p>;
  if (movie.status === "failed")
    return (
      <p className="status failed">
        Произошла ошибка загрузки. Попробуйте позже
      </p>
    );

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
        {movie.data && (
          <Card
            className="bg-dark text-white"
            style={{
              width: "52rem",
            }}>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}>
              <Container style={{ display: "flex", flexDirection: "row" }}>
                <Card.Img variant="top" src={movie.data.Poster} />
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}>
                  <Container
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Card.Title>{movie.data.Title}</Card.Title>
                    <FavoriteBtn
                      isFavorite={isFavorite}
                      onClick={() => dispatch(setFavoritesList(movie.data))}
                    />
                  </Container>
                  <ListGroup
                    style={{ fontSize: "14px" }}
                    className="list-group-flush">
                    <ListGroup.Item>
                      Released: {movie.data.Released}
                    </ListGroup.Item>
                    <ListGroup.Item>Actors: {movie.data.Actors}</ListGroup.Item>
                    <ListGroup.Item>
                      Runtime: {movie.data.Runtime}
                    </ListGroup.Item>
                    <ListGroup.Item>Genre: {movie.data.Genre}</ListGroup.Item>
                    <ListGroup.Item>
                      Language: {movie.data.Language}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Country: {movie.data.Country}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      imdbRating: {movie.data.imdbRating}
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </Container>

              <Container>
                <Card.Text>{movie.data.Plot}</Card.Text>
              </Container>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
