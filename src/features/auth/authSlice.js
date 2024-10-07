import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { verifyAuth } from "../../utils/userUrl";

const initialState = {
  loading: false,
  valid: false,
  error: "",
};

export const verifyToken = createAsyncThunk(
  "auth/verify",
  async (token, thunkApi) => {
    try {
      const response = await axios.get(verifyAuth, {
        headers: {
          Authorization: token,
        },
      });

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(verifyToken.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(verifyToken.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.error = "";
      if (action.payload.status === "success") {
        state.valid = true;
      }
    });

    builder.addCase(verifyToken.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      state.valid = false;
      state.error = action.payload?.msg;
    });
  },
});

export default authSlice.reducer;
