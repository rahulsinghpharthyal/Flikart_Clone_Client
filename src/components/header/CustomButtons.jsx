import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';

// component
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { ShoppingCart } from '@mui/icons-material';

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { acc, setAcc } = useContext(DataContext);
  const { cartItems } = useSelector(state => state.cart);

  return (
    <div className="flex items-center justify-end space-x-8 mr-12">
      {acc ? (
        <Profile acc={acc} setAcc={setAcc} />
      ) : (
        <button 
          className="mt-1 py-2 px-8 rounded-lg text-lg shadow-none text-black hover:bg-blue-500 hover:text-white transition-all duration-300"
          onClick={() => setOpen(!open)}
        >
          Login
        </button>
      )}

      <p className="mt-1 text-black text-lg">Become a Seller</p>
      <p className="mt-1 text-black text-lg">More</p>
      
      <Link to='/cart' className="flex items-center text-black text-lg">
        <div className="relative mt-1">
          <ShoppingCart className="text-black"/>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
        <p className="ml-2 mt-1">Cart</p>
      </Link>

      <LoginDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default CustomButtons;
