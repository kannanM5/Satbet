import AuthLayout from "../../Layout/AuthLayout";
import MainScreen from "../Home/MainScreen";

export const AuthRoute = {
  path: "/",
  element: <AuthLayout />,
  children: [
    { index: true, element: <MainScreen /> },
    { path: "/login", element: <MainScreen /> },
  ],
};
