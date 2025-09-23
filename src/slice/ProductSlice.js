import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",   // ✅ namespaced type
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],          // ✅ array instead of null
    isLoader: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
