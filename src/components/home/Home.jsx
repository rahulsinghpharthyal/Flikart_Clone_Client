import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// components
import Navbar from './Navbar';
import Banner from './Banner';
// import { getProducts } from '../../redux/actions/productaction';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Home = () => {
  // const { products } = useSelector((state) => state.getProducts);
  console.log('this is products',);

  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProducts());
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gray-200">
        <Banner />
        {/* <MidSlide products={products} title="Deal of the Day" timer={true} /> */}
        <MidSection />
        {/* <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} /> */}
      </div>
    </>
  );
};

export default Home;
