import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import billsReducer from "../features/bills/billsSlice";

//create store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    bills: billsReducer,
  },
});
