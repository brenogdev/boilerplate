import { AxiosError } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../@types/redux";

interface ErrorState {
  isError: number | null;
}

const initialState: ErrorState = {
  isError: null,
};

export const errorSlice = createSlice({
  name: "requestError",
  initialState,
  reducers: {
    getErrorRequesrt: (state, action: PayloadAction<number>) => {
      state.isError = action.payload;
    },
  },
});

export const { getErrorRequesrt } = errorSlice.actions;

export const selectErrorRequest = (state: RootState) =>
  state.hasErrorApp.isError;

export default errorSlice.reducer;
