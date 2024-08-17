
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import PrivateRoute from "./PrivateRoute";
import ErrorPage404 from "../Pages/ErrorPage404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute> <Home></Home></PrivateRoute>,
    errorElement: <ErrorPage404></ErrorPage404>,
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
