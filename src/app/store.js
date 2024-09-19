import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import wishListReducer from "../features/wishListSlice";
import authSlice from "@/features/authSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchSlice from "../features/searchSlice";

// configuration for redux persists.

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["status", "userData"],
};

const searchPersistConfig = {
  key: "search",
  storage,
  whitelist: ["query"],
};

// create a persist reducer
const persistAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistSearchReducer = persistReducer(searchPersistConfig, searchSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    allCarts: cartReducer,
    wishLists: wishListReducer,
    searches: persistSearchReducer,
  },
});

export const persistor = persistStore(store);
