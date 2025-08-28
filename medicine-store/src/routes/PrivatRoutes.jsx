import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivatRoutes = ({children}) => {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
  return isAuthenticated ? children:(<Navigate to="/login"/>) // Replace with actual authentication logic 
}
export default PrivatRoutes;