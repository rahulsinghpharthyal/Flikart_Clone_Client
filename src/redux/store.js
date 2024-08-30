// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import {thunk} from 'redux-thunk';
// import { getProductReducer, getPrductDetailsReducer } from './reducers/productsReducer';
// import { cartReducer } from './reducers/cartReducer';



// const reducer = combineReducers({
//     getProducts: getProductReducer,
//     getProductDetails: getPrductDetailsReducer,
//     cart: cartReducer,
// });


// const middleware = [thunk];

// const store = createStore(
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;


import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import { productsReducer, productDetailsReducer } from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer'; // Assuming this is default export

// Combine reducers
const rootReducer = {
  getProducts: productsReducer,
  getProductDetails: productDetailsReducer,
  cart: cartReducer,
};

// Create store with Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Thunk is included by default
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in non-production environments
});

export default store;
