import { RouteObject } from "react-router-dom";
import { DashboardPrivateRoute } from "./PrivateRoute";
import { AuthRoute } from "./AuthRoute";
import { MainRoute } from "./MainRoute";
import NoDataFound from "../../Components/NoDataFound";

export const routerpaths: RouteObject[] = [
  {
    // element: <AuthPrivateRoute />,
    children: [AuthRoute],
    errorElement: <NoDataFound />,
  },
  {
    element: <DashboardPrivateRoute />,
    children: [MainRoute],
    errorElement: <NoDataFound />,
  },
];
