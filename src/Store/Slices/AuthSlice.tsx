import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  profileData: null,
  selectedMenu: -1,
  transactionMenu: -1,
};

const loginSlice = createSlice({
  name: "LoginSlice",
  initialState,

  reducers: {
    StoreUserData: (state, action) => {
      state.userData = action.payload;
    },
    StoreProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    StoreSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
    StoreSelectedTransactionMenu: (state, action) => {
      state.transactionMenu = action.payload;
    },

    ClearUserData: () => {
      return { ...initialState };
    },
  },
});

export const {
  StoreUserData,
  StoreProfileData,
  ClearUserData,
  StoreSelectedMenu,
  StoreSelectedTransactionMenu,
} = loginSlice.actions;

export default loginSlice.reducer;
