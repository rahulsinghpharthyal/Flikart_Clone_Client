import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material"; // Keep Menu icon, or import from another library if needed

// components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Header Bar */}
      <header className="bg-white w-full shadow-md px-4 lg:px-20">
        <div className="flex items-center justify-between py-4">
          {/* Mobile Menu Button */}
          <button
            onClick={handleOpen}
            className="block lg:hidden text-gray-600 focus:outline-none"
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* Mobile Menu Drawer */}
          {open && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden transition-opacity duration-300 ease-in-out">
              <div className="relative bg-white w-64 h-full shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Menu Content */}
                <div className="p-6 space-y-6 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                  <CustomButtons />
                </div>
              </div>
            </div>
          )}

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg"
              alt="logo"
              className="w-24 lg:w-36"
            />
          </Link>

          {/* Search Component */}
          <div className="flex-grow mx-4 lg:mx-8">
            <Search />
          </div>

          {/* Custom Buttons for Desktop */}
          <div className="hidden lg:flex">
            <CustomButtons />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
