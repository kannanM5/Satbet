import { createHashRouter, RouterProvider } from "react-router-dom";
import { routerpaths } from "./Screens/Routes/indexRoute";
import { useDispatch } from "react-redux";
import { getCookie } from "./GeneralUtilities/Cookie.tsx";
import { useEffect } from "react";
import { StoreUserData } from "./Store/Slices/AuthSlice.tsx";

import FixedFooterContainer from "./Components/FixedFooterContainer.tsx";
import {
  StoreDarkThemeColor,
  StoreIsDarkMode,
  StorePrimaryColor,
} from "./Store/Slices/ThemeSlice.tsx";
import {
  useDarkTheme,
  useIsDarkMode,
  usePrimaryColor,
} from "./Utility/StoreData.tsx";

const App = () => {
  const router = createHashRouter(routerpaths);
  const dispatch = useDispatch();
  const defaultColor = usePrimaryColor();
  const isDarkMode = useIsDarkMode();
  const darktheme = useDarkTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const primaryColor = localStorage.getItem("primaryColor");
    const mode = localStorage.getItem("mode");

    if (mode === "true") {
      dispatch(StoreIsDarkMode(true));
    } else {
      dispatch(StoreIsDarkMode(false));
    }

    if (savedTheme) {
      dispatch(StoreDarkThemeColor(savedTheme));
    } else {
      dispatch(StoreIsDarkMode(!isDarkMode));
      dispatch(StoreDarkThemeColor(isDarkMode ? "white" : "black"));
    }
    if (primaryColor) {
      dispatch(StorePrimaryColor(primaryColor));
    } else {
      dispatch(StorePrimaryColor(defaultColor));
    }
  }, [dispatch, defaultColor, darktheme]);

  useEffect(() => {
    const userData = getCookie("login");
    if (userData) {
      dispatch(StoreUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />

      <FixedFooterContainer />
    </>
  );
};

export default App;
