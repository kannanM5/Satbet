import { createHashRouter, RouterProvider } from "react-router-dom";
import { routerpaths } from "./Screens/Routes/indexRoute";
import { useDispatch } from "react-redux";
import { ThemeContext } from "./Utility/Contexts.tsx";
import { getCookie } from "./GeneralUtilities/Cookie.tsx";
import { useEffect, useState } from "react";
import { StoreUserData } from "./Store/Slices/AuthSlice.tsx";

import FixedFooterContainer from "./Components/FixedFooterContainer.tsx";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const router = createHashRouter(routerpaths);
  const dispatch = useDispatch();
  const [primaryColor, setprimaryColor] = useState("#ebba48");
  const [modeColor, setmodeColor] = useState("black");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const primaryColor = localStorage.getItem("primaryColor");

    if (savedTheme) {
      setIsDarkTheme(savedTheme === "dark");
    }
    if (primaryColor) {
      setprimaryColor(primaryColor);
    }
  }, []);

  useEffect(() => {
    const userData = getCookie("login");

    if (userData) {
      dispatch(StoreUserData(JSON.parse(userData)));
    }
  }, [dispatch]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    setmodeColor(newTheme ? "white" : "black");

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        primaryColor,
        setprimaryColor,
        modeColor,
      }}
    >
      <RouterProvider router={router} />

      <FixedFooterContainer />
    </ThemeContext.Provider>
  );
};

export default App;
