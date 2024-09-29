import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { loginUrl } from "../../utils/userUrl";

const initialState = {
  loding: false,
  user: null,
  error: "",
};

export const loginApi = createAsyncThunk(
  "auth/loginApi",
  async ({ email, password }) => {
    try {
      const response = await axios.post(loginUrl, {
        email,
        password,
      });

      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
      state.loding = true;
      console.log("Loading........");
    });
    builder.addCase(loginApi.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(loginApi.rejected, (state, action) => {
      console.log("from error", action);
    });
  },
});

export default loginSlice.reducer;
