import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material'; // Optional: Only if you want to use icons

const ActionItems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    // navigate('/cart');
  };

  const buyNow = () => {
    const response = payUsingPaytm({ amount: 500, email: 'rahul@gmail.com' });
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response,
    };
    post(information);
  };

  return (
    <div className="flex flex-col items-start p-10 space-y-4 lg:p-10 lg:space-y-4">
      <div className="border border-gray-200 p-4 w-9/12 ml-14">
        <img src={product.detailUrl} alt="Product" className="w-full p-4" />
      </div>
      <div className="flex space-x-2 w-full">
        <button
          onClick={addItemToCart}
          className="flex items-center justify-center w-1/2 h-12 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-400"
        >
          <Cart className="mr-2" />
          Add to Cart
        </button>
        <button
          onClick={buyNow}
          className="flex items-center justify-center w-1/2 h-12 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-500"
        >
          <Flash className="mr-2" />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ActionItems;
