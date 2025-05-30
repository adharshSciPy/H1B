import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/adminlogin" replace />;

  try {
    const decoded = jwtDecode(token);
    const isTokenExpired = decoded.exp * 1000 < Date.now();
    const userRole = decoded.role;

    if (isTokenExpired) {
      localStorage.removeItem("token");
      return <Navigate to="/adminlogin" replace />;
    }

    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/adminlogin" replace />;
    }

    return <Outlet />; // Authorized
  } catch (err) {
    localStorage.removeItem("token");
    return <Navigate to="/adminlogin" replace />;
  }
};

export default ProtectedRoute;
