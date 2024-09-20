import { productData } from "@/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishList: [],
  wishListCard: productData,
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      let find = state.wishList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (find === -1) {
        state.wishList.push({ ...action.payload, quantity: 1 });
      }
    },

    setWishList: (state, action) => {
      state.wishList = action.payload;
    },

    removeToWishList: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeToWishList, setWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
