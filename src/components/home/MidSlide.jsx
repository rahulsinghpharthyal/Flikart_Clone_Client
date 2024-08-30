import React from "react";
import Slide from "./Slide";

const MidSlide = ({ products, title, timer }) => {
  return (
    <div className="flex">
      <div className="w-full md:w-5/6">
        <Slide products={products} title={title} timer={true} />
      </div>
      <div className="bg-white p-2 mt-2 ml-2 w-1/6 text-center hidden md:block">
        <img
          src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"
          alt="ad"
          className="w-[217px]"
        />
      </div>
    </div>
  );
};

export default MidSlide;
