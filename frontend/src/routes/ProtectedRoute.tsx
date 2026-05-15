import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute = () => {
    // const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const isAuthenticated = true;

   return isAuthenticated  ? <Outlet /> : <Navigate  to="/auth" replace />
}
