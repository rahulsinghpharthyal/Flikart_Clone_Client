
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);


  const buyNow = () => {
    const response = payUsingPaytm({ amount: 500, email: 'rahul@gmail.com'})
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process',
      params: response
    }
    post(information);
  }

  return (
    <>
      {
        cartItems.length 
      ?
        <div className="grid lg:grid-cols-12 gap-4 m-28 md:px-0">
            <div className="lg:col-span-9 md:col-span-9 sm:col-span-12 xs:col-span-12 pr-4 md:mb-4">
                <div className="bg-white p-6 mb-4">
                    <h2 className="text-lg font-semibold">My Cart ({cartItems.length})</h2>
                </div>
                {
                  cartItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))
                }
                <div className="bg-white p-4 shadow-md border-t border-gray-200 mt-4">
                  <button 
                    onClick={buyNow} 
                    className="flex ml-auto bg-orange-500 text-white w-64 h-12 rounded shadow-lg justify-center items-center">
                    Place Order
                  </button>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 xs:col-span-12">
                <TotalBalance cartItems={cartItems} />
            </div>
        </div>
      :
        <EmptyCart />
      }
    </>
  )
}

export default Cart;
