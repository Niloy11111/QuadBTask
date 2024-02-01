import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Showdetails from "../components/Showdetails";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: () => fetch(`https://api.tvmaze.com/search/shows?q=all`),
        element: <Showdetails></Showdetails>,
      },
    ],
  },
]);
