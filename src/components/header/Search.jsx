import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search"; 
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const Search = () => {
  const [text, setText] = useState("");
  const { data: products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    console.log("ths is my");
  }, [dispatch]);

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
          {products
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
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
