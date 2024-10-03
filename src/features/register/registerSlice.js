import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: "",
  error: "",
};

const postUserData = createAsyncThunk("register/postUserData", async () => {
  try {
  } catch (e) {}
});
