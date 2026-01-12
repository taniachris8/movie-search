import type { MovieSearchResult } from "../MovieTypes";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fetchMovieDetails } from "../state/movieDetailsSlice";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FavoriteBtn } from "./FavoriteButton";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setFavoritesList } from "../state/favoritesSlice";

type MovieProps = {
  data: MovieSearchResult;
};

export function Movie({ data }: MovieProps) {
  const { imdbID, Title, Year, Type, Poster } = data;
  const navigate = useNavigate();

  const favorites = useAppSelector((state) => state.favorites.favoritesList)
  const isFavorite = favorites.some((movie) => movie.imdbID === data.imdbID)
  const dispatch = useAppDispatch();

  const handleClick = () => {
    fetchMovieDetails(imdbID);
    navigate(`/movie/${imdbID}`);
  };

  return (
    <>
      <Card className="bg-dark text-white">
        <Link to={`/movie/${imdbID}`}>
          <Card.Img variant="top" src={Poster} />
        </Link>
        <Card.Body>
          <Link style={{ textDecoration: "none" }} to={`/movie/${imdbID}`}>
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
            <FavoriteBtn
              isFavorite={isFavorite}
              onClick={() => dispatch(setFavoritesList(data))}
            />
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}
