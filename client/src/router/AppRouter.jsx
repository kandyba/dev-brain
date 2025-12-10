import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import AuthPage from "../layouts/AuthPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
        </Route>
      </Route>

      {/* PRIVATE ROUTES */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<div>DASHBOARD</div>} />
          {/*<Route path="/files" element={<FilesPage />} />*/}
          {/*<Route path="settings" element={<SettingsPage />} />*/}
        </Route>
      </Route>

      {/* Redirect anything unknown */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default AppRouter;