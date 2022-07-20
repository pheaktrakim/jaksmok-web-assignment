import React from "react"
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { PrivateRoute } from './private.router';
import { PublicRoute } from "./public.router";
import { DefaultRoute } from './default.router';
import { ROUTE } from "../constants/routes";
import LoadingPage from "../components/loading-page/index.component";

function RequireAuth({children}) {
  let location = useLocation();
  if('auth' !== true){
    return (
      <Navigate to="/sign-in" state={{ from: location }} />
    )
  };
  return children;
};

function NotRequireAuth({children}) {
  // let location = useLocation();
  // if('auth' !== true){
  //   return (
  //     <Navigate to="/not-found" state={{ from: location }} />
  //   );
  // };
  return children;
};


function RequestRoute () {
  let history = useNavigate();
  let location = useLocation();

  React.useEffect(()=> {
    if(location.pathname === '/'){
      history(ROUTE.MOVIE);
    }
  },[location, history])

  if(DefaultRoute.length > 0)
 
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Routes>
        {PublicRoute.map((item, index)=> {
          return (
            <Route
              exact
              key={index}
              path={item.path}
              element={
                <NotRequireAuth>
                  {item.element}
                </NotRequireAuth>
              }
            />
          )
        })}

        {PrivateRoute.map((item, index)=> {
          return (
            <Route
              exact
              key={index}
              path={item.path}
              element={
                <RequireAuth>
                  {item.element}
                </RequireAuth>
              }
            />
          )
        })}

        {DefaultRoute.map((item, index)=> {
          return (
            <Route
              exact
              key={index}
              path={item.path}
              element={item.element}
            />
          )
        })}
      </Routes>
    </React.Suspense>
  )
}

export default RequestRoute;
