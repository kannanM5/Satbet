import { createContext, useContext } from "react";

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  modeColor: string;
};

const defaultThemeContext: ThemeContextType = {
  isDarkTheme: false,
  toggleTheme: () => {},
  modeColor: "black",
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);
