import { ROUTE } from "../constants/routes";
import PageNotFound from "../pages/404.page";

export const DefaultRoute = [
  {
    path: ROUTE.SIGN_IN,
    element: (
      <center>
        <h2>Sign In First</h2>
      </center>
    )
  },
  {
    path: "*",
    element: (
      <PageNotFound />
    )
  },
];
