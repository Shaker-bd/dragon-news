import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import AuthenticationLayOut from "../Layouts/AuthenticationLayOut";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/public/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayOut></AuthenticationLayOut>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News</h2>,
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);
export default router;
