import { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { setFavoritesList } from "../state/favoritesSlice";
import { fetchMovieDetails } from "../state/movieDetailsSlice";
import { NavbarComponent } from "../components/Navbar";
import { FavoriteBtn } from "../components/FavoriteButton";
import { ErrorAlert } from "../components/ErrorAlert";
import { MoviePagePlaceholder } from "../components/placeholders/MoviePagePlaceholder";
import { withFallback } from "../fallback";

export function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id]);

  const movie = useAppSelector((state) => state.movie);

  const favorites = useAppSelector((state) => state.favorites.favoritesList);
  const isFavorite = favorites.some(
    (item) => item.imdbID === movie.data?.imdbID
  );


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
        {movie.status === "failed" && (
          <ErrorAlert error="Network Error. Please check your Internet connection or try again later" />
        )}
        {movie.status === "loading" && <MoviePagePlaceholder />}
        {movie.data && (
          <Card
            className="bg-dark text-white"
            style={{
              width: "32rem",
            }}>
            <Card.Body
              style={{
                width: "700px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <Card.Img
                  variant="top"
                  src={withFallback(movie.data.Poster, "/img/no-poster.jpg")}
                  onError={(e) => {
                    e.currentTarget.src = "/img/no-poster.jpg";
                  }}
                  alt={movie.data.Title}
                  style={{
                    width: "360px",
                    height: "540px",
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    width: "520px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Card.Title>{movie.data.Title}</Card.Title>
                    <FavoriteBtn
                      isFavorite={isFavorite}
                      onClick={() => dispatch(setFavoritesList(movie.data))}
                    />
                  </div>
                  <ListGroup
                    style={{ fontSize: "14px" }}
                    className="list-group-flush">
                    <ListGroup.Item>
                      Year: {withFallback(movie.data.Year)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Genre: {withFallback(movie.data.Genre)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Runtime: {withFallback(movie.data.Runtime)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Director:{" "}
                      {withFallback(withFallback(movie.data.Director))}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Actors: {withFallback(movie.data.Actors)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Rating imdb: {withFallback(movie.data.imdbRating)}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Awards: {withFallback(movie.data.Awards)}
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div>
                <Card.Text>{withFallback(movie.data.Plot)}</Card.Text>
              </div>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
