
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import PrivateRoute from "./PrivateRoute";
import ErrorPage404 from "../Pages/ErrorPage404";
import About from "../Pages/About";
import Root from "../Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute> <Root></Root></PrivateRoute>,
    errorElement: <ErrorPage404></ErrorPage404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      }
    ]
  },
  {
    path:"/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);

export default Router;
