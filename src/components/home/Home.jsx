import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux_new/actions/productActions';
// components
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Home = () => {
  const { data: products, isLoading, isError } = useSelector((state) => state.products); // Access the products, loading, and error states
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>; // Show loading state
  if (isError) return <div>Error loading products</div>; // Show error state

  return (
    <>
      <Navbar />
      <div className=" bg-gray-200">
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
      </div>
    </>
  );
};

export default Home;
