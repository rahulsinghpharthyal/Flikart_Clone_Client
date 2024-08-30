import React, { useState } from 'react';

const Profile = ({ acc, setAcc }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAcc('');
  };

  return (
    <>
      <div onClick={handleClick} className="cursor-pointer mt-1">
        <p>{acc}</p>
      </div>
      {open && (
        <div className="absolute mt-1 bg-white shadow-lg rounded-lg">
          <button
            onClick={() => {
              handleClose();
              logoutUser();
            }}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
