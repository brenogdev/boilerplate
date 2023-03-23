import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDrawerContext } from "../hooks/useDrawerContext";
import { Dashboard } from "../pages/Dashboard";
import { PrivateRoutes } from "./PrivateRoutes";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "dashboard",
        path: "/dashboard",
        label: "Dashboard",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route index path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
