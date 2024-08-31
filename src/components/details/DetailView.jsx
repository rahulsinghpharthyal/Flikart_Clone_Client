import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getProductDetails } from '../../redux/actions/productaction';
// import ActionItems from './ActionItems';
// import ProductDetail from './ProductDetail';

const DetailView = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams();
  // const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    // if (product && id !== product.id) {
      // dispatch(getProductDetails(id));
      console.log('tis is mhy')
    // }
  }, []);

  return (
    <div className="bg-gray-200 mt-14">
      {/* {product && Object.keys(product).length && (
        <div className="flex flex-wrap bg-white">
          <div className="lg:w-1/3 md:w-1/3 sm:w-2/3 w-full p-4">
            <ActionItems product={product} />
          </div>
          <div className="lg:w-2/3 md:w-2/3 sm:w-2/3 w-full p-4 mt-12 lg:mt-0">
            <ProductDetail product={product} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default DetailView;
