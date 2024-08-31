import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material'; // Keep Menu icon, you can import from another library if needed

// components
import Search from './Search';
import CustomButtons from './CustomButtons';

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
            <header className="bg-white w-full shadow-md px-20">
                <div className="flex items-center justify-between p-4">
                    {/* Menu Button for Mobile */}
                    <button
                        onClick={handleOpen}
                        className="block lg:hidden text-gray-600"
                    >
                        <Menu />
                    </button>

                    {/* Drawer for Mobile */}
                    {open && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
                            <div className="relative bg-white w-64 h-full" onClick={handleClose}>
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 text-gray-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="p-4">
                                    <CustomButtons />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg'
                            alt='logo'
                            className='w-36'
                        />
                    </Link>

                    {/* Search Component */}
                    <Search />

                    {/* Custom Buttons for Desktop */}
                    <div className="hidden lg:flex ml-auto">
                        <CustomButtons />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

