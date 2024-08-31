import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../../customAxios/authAxios";

// Define the async thunk action for fetching products
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try{
        const response = await authAxios.get('/products');
        return response.data;
    }catch(err){
        console.log('Error getting produts', err)
        throw new Error(err.message)
    }
});


export const getProductById = createAsyncThunk(
    'products/getProductById', 
    async (id, { rejectWithValue }) => {
      try {
        const response = await authAxios.get(`/product/${id}`);
        return response.data;
      } catch (error) {
        console.log('Error getting product by ID', error);
        return rejectWithValue(error.message);
      }
    }
  );