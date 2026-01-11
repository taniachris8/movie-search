import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { FavoritesPage } from "./pages/Favorites";
import { MoviePage } from "./pages/MoviePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/movie/:id",
    element: <MoviePage />,
  },
]);
