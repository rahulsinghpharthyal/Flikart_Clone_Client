import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "../actions/productActions";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        data: [],
        productDetails: null,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isError = false;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error('Error fetching products:', action.error.message);
        })
        // Handling the getProductById async thunk
        .addCase(getProductById.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.productDetails = null;
        })
        .addCase(getProductById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productDetails = action.payload;
            state.isError = false;
        })
        .addCase(getProductById.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
            console.error('Error fetching product details:', action.payload);
        });
    }
});

export default productSlice.reducer;