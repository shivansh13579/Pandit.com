import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import wishListReducer from "../features/wishListSlice";
import searchReducer from "../features/searchSlice";
import authSlice from "@/features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

// configuration for redux persists.

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["status", "userData"],
};

// create a persist reducer
const persistAuthReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    allCarts: cartReducer,
    wishLists: wishListReducer,
    searches: searchReducer,
  },
});

export const persistor = persistStore(store);
