// import * as actionTypes from "../constants/productConstant";

// export const getProductReducer = (state = { products: []}, action) =>{
//     switch(action.type){
//         case actionTypes.GET_PRODUCTS_SUCCESS:
//             return { products: action.payload }
//         case actionTypes.GET_PRODUCTS_FAIL:
//             return { error: action.payload }
//         default:
//             return state
//     }
// }

// export const getPrductDetailsReducer = (state = {product: {}}, action)=>{
//     switch(action.type){
//         case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
//             return { loading: true }
//         case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
//             return { loading: false, product: action.payload}
//         case actionTypes.GET_PRODUCT_DETAILS_FAIL:
//             return { loading: false, error: action.payload}
//         case actionTypes.GET_PRODUCT_DETAILS_RESET:
//             return {product: {}}
//         default: 
//             return state
//     }

// }

import { createSlice } from '@reduxjs/toolkit';

const initialProductsState = {
  products: [],
  error: null,
};

const initialProductDetailsState = {
  product: {},
  loading: false,
  error: null,
};

const getProductReducer = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
      state.error = null;
    },
    getProductsFail: (state, action) => {
      state.error = action.payload;
    },
  },
});

const getPrductDetailsReducer = createSlice({
  name: 'productDetails',
  initialState: initialProductDetailsState,
  reducers: {
    getProductDetailsRequest: (state) => {
      state.loading = true;
    },
    getProductDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    },
    getProductDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getProductDetailsReset: (state) => {
      state.product = {};
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  getProductsSuccess,
  getProductsFail,
} = getProductReducer.actions;

export const {
  getProductDetailsRequest,
  getProductDetailsSuccess,
  getProductDetailsFail,
  getProductDetailsReset,
} = getPrductDetailsReducer.actions;

export const productsReducer = getProductReducer.reducer;
export const productDetailsReducer = getPrductDetailsReducer.reducer;
