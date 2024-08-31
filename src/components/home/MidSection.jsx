import React from 'react';
import { imageURL } from '../../constants/data';

const MidSection = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-2">
        {imageURL.map((image, index) => (
          <div key={index} className="w-full lg:w-1/3 md:w-1/3 sm:w-full p-1">
            <img src={image} alt={index} className="w-full h-auto" />
          </div>
        ))}
      </div>
      <img
        src="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50"
        alt="covid"
        className="mt-2 w-full h-40 object-cover"
      />
    </>
  );
};

export default MidSection;
