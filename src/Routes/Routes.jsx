
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute> <Home></Home></PrivateRoute>,
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
