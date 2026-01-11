import { useParams } from "react-router";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { fetchMovieDetails } from "../state/movieDetailsSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { Container } from "react-bootstrap";
import { NavbarComponent } from "../components/Navbar";

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
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "20px",
            }}>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}>
              <Container style={{ display: "flex", flexDirection: "row" }}>
                <Card.Img variant="top" src={movie.data.Poster} />
                <Container style={{ display: "flex", flexDirection: "column" }}>
                  <Card.Title>{movie.data.Title}</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Released: {movie.data.Released}
                    </ListGroup.Item>
                    <ListGroup.Item>Actors: {movie.data.Actors}</ListGroup.Item>
                    <ListGroup.Item>
                      Runtime: {movie.data.Runtime}
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </Container>

              <Container>
                <Card.Text>{movie.data.Plot}</Card.Text>
              </Container>

              {/* <img
              onClick={handleFavoriteClick}
              src={
                !favorite
                  ? "/icons/icons8-heart-50 (6).png"
                  : "/icons/icons8-heart-50 (1).png"
              }
              alt="favorite icon"
              className="favorite-icon"
            /> */}
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
}
