import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  primaryColor: "#ebba48",
  darkTheme: "black",
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,

  reducers: {
    StoreIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    StorePrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    StoreDarkThemeColor: (state, action) => {
      state.darkTheme = action.payload;
    },
    ClearThemesColor: () => {
      return { ...initialState };
    },
  },
});

export const {
  StoreIsDarkMode,
  StorePrimaryColor,
  StoreDarkThemeColor,
  ClearThemesColor,
} = themeSlice.actions;

export default themeSlice.reducer;
