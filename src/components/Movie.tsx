import type { MovieSearchResult } from "../movieTypes";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FavoriteBtn } from "./FavoriteButton";
import { useAppSelector, useAppDispatch } from "../state/hooks";
import { setFavoritesList } from "../state/favoritesSlice";
import { withFallback } from "../fallback";

type MovieProps = {
  data: MovieSearchResult;
};

export function Movie({ data }: MovieProps) {
  const { imdbID, Title, Year, Type, Poster } = data;
  const dispatch = useAppDispatch();

  const favorites = useAppSelector((state) => state.favorites.favoritesList);
  const isFavorite = favorites.some((item) => item.imdbID === imdbID);

  return (
    <>
      <Card className="bg-dark text-white">
        <Link to={`/movie/${imdbID}`}>
          <Card.Img
            onError={(e) => {
              e.currentTarget.src = "/img/no-poster.jpg";
            }}
            variant="top"
            src={withFallback(Poster, "/img/no-poster.jpg")}
            alt={Title}
            style={{
              width: "300px",
              height: "440px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        </Link>
        <Card.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0",
            }}>
            <Link style={{ textDecoration: "none" }} to={`/movie/${imdbID}`}>
              <Card.Title style={{ fontSize: "20px", margin: "0" }}>
                {Title.length > 20 ? Title.slice(0, 20) + "..." : Title}
              </Card.Title>
            </Link>
            <FavoriteBtn
              isFavorite={isFavorite}
              onClick={() => dispatch(setFavoritesList(data))}
            />
          </div>
          <Card.Text
            style={{
              fontSize: "14px",
              marginBottom: "5px",
              marginTop: "20px",
            }}>
            Released: {withFallback(Year)}
          </Card.Text>
          <Card.Text style={{ fontSize: "14px" }}>
            Type: {withFallback(Type)}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
