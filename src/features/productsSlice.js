import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../api/client";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await client.get("amiibo/");
    return response.data.amiibo.slice(0, 40);
  }
);

export const fetchProductsByName = createAsyncThunk(
  "products/fetchProducts",
  async (name) => {
    const response = await client.get(`amiibo/?name=${name}`);
    return response.data.amiibo;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, _action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.products = action.payload.map((product) => {
          const price = Math.floor(Math.random() * 11) * 1000 + 1000;
          return { ...product, price };
        });
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectFetchStatus = (state) => state.products.status;

export default productsSlice.reducer;
