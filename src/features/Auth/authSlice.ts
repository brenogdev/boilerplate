import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { constants } from "../../constants";
import { TokenProps } from "../../@types/authenticated";
import { RootState } from "../../@types/redux";

interface AuthState {
  userLogged: TokenProps;
}

const initialState: AuthState = {
  userLogged: {
    accessToken:
      sessionStorage.getItem(constants.AUTH.LOCAL_STORAGE_KEY_ACCESS_TOKEN) ||
      null,
    refreshToken:
      sessionStorage.getItem(constants.AUTH.LOCAL_STORAGE_KEY_REFRESH_TOKEN) ||
      null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getToken: (state, action: PayloadAction<string>) => {
      state.userLogged.accessToken = action.payload;
      sessionStorage.setItem(
        constants.AUTH.LOCAL_STORAGE_KEY_ACCESS_TOKEN,
        action.payload
      );
    },
    getRefreshToken: (state, action: PayloadAction<string>) => {
      state.userLogged.refreshToken = action.payload;
      sessionStorage.setItem(
        constants.AUTH.LOCAL_STORAGE_KEY_REFRESH_TOKEN,
        action.payload
      );
    },

    logout: (state) => {
      state.userLogged.accessToken = null;
      state.userLogged.refreshToken = null;
      sessionStorage.removeItem(constants.AUTH.LOCAL_STORAGE_KEY_ACCESS_TOKEN);
      sessionStorage.removeItem(constants.AUTH.LOCAL_STORAGE_KEY_REFRESH_TOKEN);
    },
  },
});

export const { getToken, getRefreshToken, logout } = authSlice.actions;

export const selectUserLogged = (state: RootState) => state.authentication.userLogged;

export default authSlice.reducer;
