import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Store/Slices/AuthSlice";
import ThemeReducer from "../Store/Slices/ThemeSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    themes: ThemeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
