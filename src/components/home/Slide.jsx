import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material"; // Keeping this as it's part of MUI; can replace with a <hr> tag if needed

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds} Left{" "}
      </span>
    );
  };

  return (
    <div className="mt-2 bg-white">
      <div className="flex p-4">
        <h2 className="text-lg font-semibold mr-6">{title}</h2>
        {timer && (
          <div className="flex items-center ml-2 text-gray-500">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="timer"
              className="w-6"
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </div>
        )}
        <button className="ml-auto bg-blue-600 text-white rounded px-4 py-1 text-sm font-semibold">
          View all
        </button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        slidesToSlide={1}
        keyBoardControl={true}
        centerMode={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products?.map((product, index) => (
          <Link to={`product/${product.id}`} key={index}>
            <div className="text-center p-6">
              <img src={product.url} alt="product" className="h-40 mx-auto" />
              <p className="font-bold text-gray-900 mt-2">{product.title.shortTitle}</p>
              <p className="text-green-600">{product.discount}</p>
              <p className="text-gray-700 opacity-60">{product.tagline}</p>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
