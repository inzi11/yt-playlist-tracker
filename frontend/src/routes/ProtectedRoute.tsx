import { Navigate, Outlet } from "react-router-dom"
import { Auth } from "../context/AuthProvider/AuthProvider";




export const ProtectedRoute = () => {

  const { user } = Auth();

  // const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const isAuthenticated = Boolean(user);

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
}
