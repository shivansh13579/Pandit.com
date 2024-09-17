export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.qunantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (sum, product) =>
      sum +
      product.qunantity *
        parseInt(product.discountPrice.replace("Rs. ", "").trim(), 10),
    0
  );
};

function CartReducer(state, action) {
  switch (action.type) {
    // Add Cart Item
    case "Add":
      const existingProduct = state.find((p) => p.id === action.product.id);
      let updateData;
      if (existingProduct) {
        updateData = state.map((item) =>
          item.id === action.product.id
            ? { ...item, qunantity: item.qunantity + 1 }
            : item
        );
      } else {
        updateData = [...state, { ...action.product, qunantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updateData));
      return updateData;

    // Remove Cart Item
    case "Remove":
      updateData = state.filter((p) => p.id !== action.id);
      localStorage.setItem("cart", JSON.stringify(updateData));
      return updateData;

    // Increase Cart Item
    case "Increase":
      updateData = state.map((item) =>
        item.id === action.id ? { ...item, qunantity: qunantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updateData));
      return updateData;

    // Decrease Cart Item
    case "Decrease":
      updateData = state.map((item) =>
        item.id == action.id ? { ...item, qunantity: item.qunantity - 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updateData));
      return updateData;

    case "LoadCart":
      return [...action.cart];

    default:
      return state;
  }
}

export default CartReducer;
