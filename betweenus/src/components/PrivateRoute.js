import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import isLogin from "../hooks/isLogin";

export default function PrivateRoute() {
  return isLogin() ? <Outlet /> : <Navigate to="/guide" />;
}
