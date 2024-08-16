
import useAuth from '../Hook/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
  
    if (loading) {
      return <h1>LOADING...</h1>;
    }
  
    if (!user) {
      return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
    }
  
    return <div>{children}</div>;

};

export default PrivateRoute;