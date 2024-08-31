import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/getProduct';

export const store = configureStore({
    reducer:{
        products: productReducer
    },
});




