import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { registerUrl } from "../../../utils/userUrl";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

export const postUserData = createAsyncThunk(
  "register/postUserData",
  async (formBody, thunkApi) => {
    try {
      const response = await axios.post(registerUrl, formBody);

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postUserData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(postUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      if (action.payload.status === "success") {
        state.success = action.payload.msg;
      }
    });

    builder.addCase(postUserData.rejected, (state, action) => {
      console.log(action.error);
      console.log(action.payload);
      state.loading = false;
      state.error = action.payload?.msg;
      state.success = "";
    });
  },
});

export default registerSlice.reducer;
