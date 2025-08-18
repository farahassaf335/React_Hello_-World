import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
