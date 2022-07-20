
import { ROUTE } from "../constants/routes";
import MoviePage from "../pages/movie/movie.page";
import CategoryPage from '../pages/category.page';
import TagPage from "../pages/tag.page";
import ViewDetailMoviePage from '../pages/movie/detail-moview.page';

export const PublicRoute = [
  {
    path: ROUTE.MOVIE,
    element: (<MoviePage />)
  },
  {
    path: ROUTE.MOVIE_DETAIL,
    element: (<ViewDetailMoviePage />)
  },
  {
    path: ROUTE.CATEGORY,
    element: (<CategoryPage />)
  },
  {
    path: ROUTE.TAG,
    element: (<TagPage />)
  },
];