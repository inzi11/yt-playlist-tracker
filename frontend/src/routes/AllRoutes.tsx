import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Auth from "../pages/Auth";
import DashboardPage from "../pages/DashboardPage";
import { ProtectedRoute } from "./ProtectedRoute";
import Analytics from "../pages/AnalyticsPage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
              <Route path="/auth" element={<Auth />} />
              
              <Route element={<ProtectedRoute />}>   
            <Route path="/" element={<Layout />} >
            <Route index element={<DashboardPage />} />
            <Route path="analytics" element={<Analytics />} />
            </Route>

          {/* write all the other pages here */}
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
