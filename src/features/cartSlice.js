import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.tail === action.payload.tail
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
} = slice.actions;

export const selectItemsInCart = (state) => state.cart.products.length;
export const selectCart = (state) => state.cart.products;

export default slice.reducer;
