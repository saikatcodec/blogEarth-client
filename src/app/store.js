import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import registerReducer from "../features/register/registerSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    auth: authReducer,
  },
  // devTools: false, // For production mode
});

export default store;
