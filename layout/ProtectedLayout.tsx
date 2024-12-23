import React from "react";
import useAuthStore from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <header>Protected Area</header>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
