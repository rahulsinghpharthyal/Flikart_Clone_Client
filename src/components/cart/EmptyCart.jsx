import React from 'react';

const EmptyCart = () => {
  const imageURL = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
    <div className="h-[80vh] w-[80%] bg-white mx-auto my-20 px-10">
      <div className="text-center pt-16">
        <img
          src={imageURL}
          alt='empty'
          className="w-1/6 mx-auto"
        />
        <p className="text-lg font-medium mt-4">Your Cart is empty</p>
        <p className="text-md mt-2">Add items to it now</p>
      </div>
    </div>
  );
};

export default EmptyCart;
