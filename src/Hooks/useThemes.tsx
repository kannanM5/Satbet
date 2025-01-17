import { useIsDarkMode, usePrimaryColor } from "../Utility/StoreData";

const useThemes = () => {
  const isDarkMode = useIsDarkMode();
  const primaryColor = usePrimaryColor();

  return {
    textColor: isDarkMode ? "black" : "white",
    bgColor: !isDarkMode ? "black" : "white",
    primaryColor: primaryColor,
    isMode: isDarkMode,
  };
};

export default useThemes;
