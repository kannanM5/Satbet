import { useSelector } from "react-redux";
import { ReducerProps } from "../@types/reducer_types";

export const useTOken = () => {
  return useSelector((state: ReducerProps) => state.login?.userData);
};

export const useUserData = () => {
  return useSelector((state: ReducerProps) => state.login?.userData);
};

export const useSelectedMenu = () => {
  return useSelector((state: ReducerProps) => state.login?.selectedMenu);
};

export const useSelectedTransactionMenu = () => {
  return useSelector((state: ReducerProps) => state.login?.transactionMenu);
};

export const usePrimaryColor = () => {
  return useSelector((state: ReducerProps) => state.themes?.primaryColor);
};

export const useDarkTheme = () => {
  return useSelector((state: ReducerProps) => state.themes?.darkTheme);
};

export const useIsDarkMode = () => {
  return useSelector((state: ReducerProps) => state.themes?.isDarkMode);
};
