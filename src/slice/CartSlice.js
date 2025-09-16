const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const fetchCartItems = createAsyncThunk("fetchCartItems",async () =>{
    const res = await fetch("https://fakestoreapi.com/products");
    const result = await res.json();
    console.log("result",JSON.stringify(result))
    console.log("hey")
    return result;

})

const Cartslice = createSlice({
    name: "cartitems",
    initialState: {
      data: null,
      isLoader: false,
      isError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCartItems.pending, (state) => {
        state.isLoader = true;
      });
      builder.addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      });
      builder.addCase(fetchCartItems.rejected, (state) => {
        state.isLoader = false;
        state.isError = true;
      });
    },

})

export default Cartslice.reducer;