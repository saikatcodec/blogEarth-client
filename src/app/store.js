import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  // devTools: false, // For production mode
});

export default store;
