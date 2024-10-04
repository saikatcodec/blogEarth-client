import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { loginUrl } from "../../../utils/userUrl";
import getToken from "../../../utils/getTokenFromLocalStore";

const initialState = {
  loding: false,
  user: null,
  token: getToken(),
  error: "",
};

export const loginApi = createAsyncThunk(
  "auth/loginApi",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
      state.loding = true;
    });

    builder.addCase(loginApi.fulfilled, (state, action) => {
      const data = action.payload;

      state.loding = false;
      state.error = "";
      if (data.status === "success") {
        state.user = data.data.user_email;
        state.token = `Bearer ${data.data.token}`;
        localStorage.setItem("token", `Bearer ${data.data.token}`);
      }
    });

    builder.addCase(loginApi.rejected, (state, action) => {
      state.error = action.payload;
      state.loding = false;
      state.user = null;
      state.token = "";
    });
  },
});

export default loginSlice.reducer;
