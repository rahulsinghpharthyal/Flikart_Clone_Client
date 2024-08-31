import React from 'react';
import { navData } from '../../constants/data';

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between overflow-hidden mt-14 mx-32 lg:mx-0">
        {navData?.map((value, index) => (
          <div key={index} className="p-3 text-center">
            <img src={value.url} alt="img" className="h-32" />
            <p className="text-sm font-bold">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
