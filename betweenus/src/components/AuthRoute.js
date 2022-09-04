import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default function AuthRoute({ path, element }) {
  return (
    <Route path={path} element={<PrivateRoute />}>
      <Route path={path} element={element} />
    </Route>
  );
}
