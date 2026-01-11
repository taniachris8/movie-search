export type MovieSearchResult = {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
};

export type MovieDetails = {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type SearchResponse = {
  Search: MovieSearchResult[];
  totalResults: string;
  Response: string;
  Error?: string;
}

// export type DetailsResponse = {
//  Search: MovieDetails;
// //   totalResults: string;
//   Response: string;
//   Error?: string;
// };