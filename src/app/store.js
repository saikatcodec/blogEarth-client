import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  // devTools: false, // For production mode
});

export default store;
