import type { MovieSearchResult } from "../MovieTypes";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fetchMovieDetails } from "../state/movieDetailsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

type MovieProps = {
  data: MovieSearchResult;
};

export function Movie({ data }: MovieProps) {
  const { imdbID, Title, Year, Type, Poster } = data;
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    fetchMovieDetails(imdbID);
    navigate(`/movie/${imdbID}`);
  };

  const handleFavoriteClick = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <>
      <Card className="bg-dark text-white">
        <Link to="">
          <Card.Img variant="top" src={Poster} />
        </Link>
        <Card.Body>
          <Link style={{ textDecoration: "none" }} to="">
            <Card.Title style={{ fontSize: "20px", marginBottom: "20px" }}>
              {Title.length > 20 ? Title.slice(0, 20) + "..." : Title}
            </Card.Title>
          </Link>

          <Card.Text style={{ fontSize: "14px", marginBottom: "5px" }}>
            Released: {Year}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }}>Genre: {Type}</Card.Text>

          <Container
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingLeft: "0",
            }}>
            <Button onClick={() => handleClick()} variant="info">
              Details
            </Button>
            <img
              onClick={handleFavoriteClick}
              src={
                !favorite
                  ? "/icons/icons8-heart-50 (6).png"
                  : "/icons/icons8-heart-50 (1).png"
              }
              alt="favorite icon"
              className="favorite-icon"
            />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
