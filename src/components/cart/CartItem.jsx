import React from 'react';
import { useDispatch } from 'react-redux';
import { addEllipsis } from '../../utils/common-utils';
import GroupOfButton from './GroupOfButton';
import { removeFromCart } from '../../redux/actions/cartAction';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log('this is item', item)
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
    console.log('item removed')
  }

  return (
    <div className="flex bg-white border-t border-gray-200">
      <div className="flex flex-col m-5">
        <img src={item.url} alt='product' className="h-28 w-28" />
        <GroupOfButton />
      </div>
      <div className="m-5 flex-1">
        <p className="text-base font-normal">{addEllipsis(item.title.longTitle)}</p>
        <p className="text-gray-600 text-sm mt-2">
          Seller: RetailNet
          <span className="inline-block ml-2 mb-2">
            <img
              src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
              alt='fliplkartassured'
              className="w-12"
            />
          </span>
        </p>
        <p className="my-5">
          <span className="font-semibold text-lg">₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
          <span className="text-gray-600 line-through">₹{item.price.mrp}</span>&nbsp;&nbsp;&nbsp;
          <span className="text-green-600">{item.price.discount}</span>
        </p>
        <button
          onClick={() => removeItemFromCart(item.id)}
          className="text-black text-base font-semibold mt-5"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
