import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let userData = JSON.parse(localStorage.getItem("isLoggedIn"));

  return userData?.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
