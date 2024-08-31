import React, { useEffect } from 'react';

const TotalBalance = ({ cartItems }) => {
  // const [price, setPrice] = useState(0);
  // const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // totalAmount();
  }, [cartItems]);

  // const totalAmount = () => {
  //   let price = 0, discount = 0;
  //   cartItems.forEach((item) => {
  //     price += item.price.mrp;
  //     discount += (item.price.mrp - item.price.cost);
  //   });
  //   setPrice(price);
  //   setDiscount(discount);
  // };

  return (
    <div className="bg-white p-4">
      <div className="border-b border-gray-200 pb-2 mb-4">
        <h2 className="text-gray-600 text-lg font-medium">PRICE DETAILS</h2>
      </div>
      <div>
        <p className="text-sm mb-4 flex justify-between">
          {/* Price ({cartItems?.length} item) */}
          Price (23 item)
          {/* <span>₹{price}</span> */}
          <span>₹23</span>
        </p>
        <p className="text-sm mb-4 flex justify-between">
          Discount
          <span className="text-green-500">₹23</span>
          {/* <span className="text-green-500">₹{discount}</span> */}
        </p>
        <p className="text-sm mb-4 flex justify-between">
          Delivery Charges
          <span>₹40</span>
        </p>
        <p className="text-base font-semibold mb-4 flex justify-between">
          Total Amount
          {/* <span>₹{price - discount + 40}</span> */}
        </p>
        <p className="text-green-500 font-medium">
          {/* You will save ₹{discount - 40} */}
        </p>
      </div>
    </div>
  );
};

export default TotalBalance;
