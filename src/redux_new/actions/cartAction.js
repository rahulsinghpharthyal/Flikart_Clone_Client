import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../../customAxios/authAxios";

// Async action to add a product to the cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ( id, quantity ,  rejectWithValue ) => {
    console.log('is and quantity is', id , quantity);
    try {
      const response = await authAxios.get(`/product/${id}`);
      console.log(response)
      return { ...response.data, quantity }; // Return the product data with the quantity
    } catch (err) {
      console.error('Error adding to cart:', err);
      return rejectWithValue(err.message); // Return the error message
    }
  }
);

// Regular action to remove a product from the cart
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (id) => {
    // Since this is a local operation, we don't need to do any async work here.
    return id;
  }
);
