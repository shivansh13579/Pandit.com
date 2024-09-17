import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import wishListReducer from "../features/wishListSlice";
import searchReducer from "../features/searchSlice";
import authSlice from "@/features/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    allCarts: cartReducer,
    wishLists: wishListReducer,
    searches: searchReducer,
  },
});
