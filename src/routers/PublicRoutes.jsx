import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext'

export const PublicRoutes = ({ children }) => {
  
  const { user } = useContext(AuthContext);

  return user.isLogged 
  ? <Navigate to="/*" /> 
  : children;
};
