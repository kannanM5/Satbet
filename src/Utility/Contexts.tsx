import React, { createContext, useContext } from "react";

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  primaryColor: string;
  modeColor: string;
  setprimaryColor: React.Dispatch<React.SetStateAction<string>>;
};

const defaultThemeContext: ThemeContextType = {
  isDarkTheme: false,
  toggleTheme: () => {},
  primaryColor: "#ebba48",
  setprimaryColor: () => {},
  modeColor: "black",
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);
