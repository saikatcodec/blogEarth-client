import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loding: false,
  user: null,
  error: "",
};

export const loginApi = createAsyncThunk("auth/loginApi", () => {});

const authSlice = createSlice({
  name: "auth",
  initialState,
});
