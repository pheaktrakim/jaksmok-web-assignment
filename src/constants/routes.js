
export const ROUTE = {
  CATEGORY: '/category',
  MOVIE: '/movie',
  MOVIE_DETAIL: '/movie/detail/:id',
  TAG: '/tag',
  SIGN_IN: '/sign-in',
  NOT_FOUND: '/not-found',
};

export const MENU = [
  {
    routerTo: ROUTE.MOVIE,
    name: 'Movie',
    partName: 'movie',
    rank: 0,
  },
  {
    routerTo: ROUTE.CATEGORY,
    name: 'Category',
    partName: 'category',
    rank: 1,
  },
  {
    routerTo: ROUTE.TAG,
    name: 'Tag',
    partName: 'tag',
    rank: 2,
    acesStatus: "PUBLIC",
  },
]