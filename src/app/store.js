import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/features/authSlice";
import searchSlice from "../features/searchSlice";
import cartSlice from "../features/cartSlice";
import wishListSlice from "../features/wishListSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const allCartsPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cart"],
};

const wishListPersistConfig = {
  key: "wishList",
  storage,
  whitelist: ["wishList"],
};

// create a persist reducer
const persistAuthReducer = persistReducer(authPersistConfig, authSlice);
const persistSearchReducer = persistReducer(searchPersistConfig, searchSlice);
const persistCartReducer = persistReducer(allCartsPersistConfig, cartSlice);
const persistWishListReducer = persistReducer(
  wishListPersistConfig,
  wishListSlice
);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    allCarts: persistCartReducer,
    wishLists: persistWishListReducer,
    searches: persistSearchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore persistor actions in serializability checks
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
      },
    }),
});

export const persistor = persistStore(store);
