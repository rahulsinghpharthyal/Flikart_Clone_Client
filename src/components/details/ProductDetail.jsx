import React from 'react';

const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <h1 className="text-xl font-semibold">{product.title.longTitle}</h1>
      <p className="mt-1 text-gray-600 text-sm">
        8 Rating & 1 Reviews
        <span>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
            alt="flipkartassured"
            className="w-20"
          />
        </span>
      </p>
      <p className="text-lg">
        <span className="text-2xl">₹{product.price.cost}</span>
        <span className="text-gray-600 ml-2 line-through">₹{product.price.mrp}</span>
        <span className="text-green-600 ml-2">{product.price.discount}</span>
      </p>
      <p className="mt-4 text-lg font-semibold">Available Offers</p>
      <div className="text-sm mt-2">
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          Get extra 20% off up to ₹58 on 1 item(s) T&C
        </p>
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          Get extra 13% off (price inclusive of discount) T&C
        </p>
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* Know More
        </p>
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          Buy 2 items save 5%; Buy 3 or more save 10%
        </p>
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          5% Cashback on Flipkart Axis Bank Card
        </p>
        <p className="flex items-center mb-2">
          <span className="text-green-500 mr-2 text-lg">•</span>
          No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999
        </p>
      </div>

      <div className="mt-6">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="text-sm">
              <td className="text-gray-600 py-2 px-4 border-b">Delivery</td>
              <td className="font-semibold py-2 px-4 border-b">Deliver By {date.toDateString()} | ₹40</td>
            </tr>
            <tr className="text-sm">
              <td className="text-gray-600 py-2 px-4 border-b">Warranty</td>
              <td className="py-2 px-4 border-b">No Warranty</td>
            </tr>
            <tr className="text-sm">
              <td className="text-gray-600 py-2 px-4 border-b">Seller</td>
              <td className="py-2 px-4 border-b">
                <span className="text-blue-600">SuperComNet</span>
                <p>GST invoice available</p>
                <p>View more sellers starting from ₹{product.price.cost}</p>
              </td>
            </tr>
            <tr className="text-sm">
              <td colSpan="2" className="py-2 px-4 border-b">
                <img
                  src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
                  alt="flipkartscoins"
                  className="w-96"
                />
              </td>
            </tr>
            <tr className="text-sm">
              <td className="text-gray-600 py-2 px-4 border-b">Description</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDetail;
