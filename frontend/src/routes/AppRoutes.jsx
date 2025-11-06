import React, { Suspense } from "react";
import Loading from "../components/ui/Loading";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { publicRoutes } from "./publicRoutes";
import UnauthorizedPage from "../pages/UnauthorizedPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes - Anyone can access */}
          {publicRoutes.map(({ path, element: Element }) => () => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Route>
        {/* Error Pages */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
