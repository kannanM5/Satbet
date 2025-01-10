import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../GeneralUtilities/Cookie";

// export const AuthPrivateRoute = () => {
//   return getCookie("login") ? <Outlet /> : <Navigate to="/login" />;
// };

// export const DashboardPrivateRoute = () => {
//   return !getCookie("login") ? <Navigate to="/login" /> : <Outlet />;
// };

export const AuthPrivateRoute = () => {
  const isLoggedIn = getCookie("login");

  if (isLoggedIn) {
    return <Navigate to={"/dashboard"} />;
  } else {
    return <Navigate to="/" />;
  }

  // return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export const DashboardPrivateRoute = () => {
  const isLoggedIn = getCookie("login");

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
