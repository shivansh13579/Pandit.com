import { createSlice } from "@reduxjs/toolkit";
import { productData } from "@/data/products";

const initialState = {
  cart: [],
  item: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      // localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    setCartItem: (state, action) => {
      state.cart = action.payload;
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { discountPrice, quantity } = cartItem;

          const itemTotal =
            parseInt(discountPrice.replace("Rs.", "").trim()) * quantity;

          // Accumulate totals
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;

          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.quantity < 10 && item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.quantity > 1 && item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  },
});

export const {
  addToCart,
  setCartItem,
  getCartTotal,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
