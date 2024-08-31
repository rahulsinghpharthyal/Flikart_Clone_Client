// import React, { useEffect, useState } from 'react';
// import {InputBase, Box, List, ListItem, styled} from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// import { useSelector, useDispatch } from 'react-redux';
// import { getProducts } from '../../redux/actions/productaction';
// import { Link } from 'react-router-dom';

// const SearchContainer = styled(Box)`
//     background: #F0F5FF;
//     width: 38%;
//     border-radius: 2px;
//     margin-left: 10px; 
//     display: flex;
// ` 

// const InputSearchBase = styled(InputBase)`
//     padding-left: 20px;
//     width: 100%;
//     font-size: unset;
// `
// const SearchIconrapper = styled(Box)`
//     color: #989CA2;
//     padding: 5px;

// `
// const ListWrapper = styled(List)`
//   position: absolute;
//   background: #fff;
//   color: #000;
//   margin-top: 40px;
// `
// const Search = () => {

//   const [ text, setText] = useState('');

//   const { products } = useSelector(state => state.getProducts);
 
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(getProducts())
//   }, [dispatch])

//   const getText = (text) =>{
//       setText(text);
//   }
//   return (
//     <>
  
//     <SearchContainer>
//       <SearchIconrapper>
//           <SearchIcon/>
//       </SearchIconrapper>
//         <InputSearchBase
//         placeholder='Search for Products, Brands and More' onChange={(e)=> getText(e.target.value)} value={text} />
//         {
//           text &&
//           <ListWrapper>
//             {
//               products.filter(product=>
//                 product.title.longTitle.toLowerCase().includes(text.toLowerCase())
//               ).map((product, index)=>(
//                 <ListItem key={index} >
//                   <Link 
//                   to={`/product/${product.id}`}
//                   onClick={()=> setText('')}
//                   style={{textDecoration: 'none', color: 'inherit'}}>
//                   {product.title.longTitle}
//                   </Link>
//                 </ListItem>
//               ))
//             }
//           </ListWrapper >
//         }
//     </SearchContainer>
//     </>
//   )
// }

// export default Search;

import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search'; // You can keep using this or replace with an SVG if needed
// import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productaction';
import { Link } from 'react-router-dom';
import { CloseFullscreen } from '@mui/icons-material';

const Search = () => {
  const [text, setText] = useState('');
  // const { products } = useSelector((state) => state.getProducts);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getProducts());
    console.log('ths is my')
  }, 
  // [dispatch]
  []
);

  const getText = (text) => {
    setText(text);
  };

  return (
    <div className="relative bg-[#F0F5FF] w-3/8 rounded-md flex ml-2">
      <div className="text-gray-500 p-2 flex items-center">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search for Products, Brands and More"
        onChange={(e) => getText(e.target.value)}
        value={text}
        className="w-96 flex-1 p-2 bg-transparent border-none outline-none text-base"
      />
      {text && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white text-black max-h-60 overflow-y-auto border border-gray-300 rounded-md">
          {/* {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.id}`}
                onClick={() => setText('')}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                {product.title.longTitle}
              </Link>
            ))} */}
        </div>
      )}
    </div>
  );
};

export default Search;
