import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../Store/Slices/AuthSlice";

import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
