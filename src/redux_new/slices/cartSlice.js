import { createSlice } from "@reduxjs/toolkit";
import { addToCart } from '../actions/cartAction'; // Adjust the path as needed

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        // Optionally handle loading state
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const item = action.payload;
        const exist = state.cartItems.find((product) => product.id === item.id);

        if (exist) {
          state.cartItems = state.cartItems.map((data) =>
            data.id === exist.id ? item : data
          );
        } else {
          state.cartItems.push(item);
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        // Optionally handle error state
        console.error('Error adding to cart:', action.payload);
      });
  },
});

export const { removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
