import React from 'react';

const GroupOfButton = () => {
  return (
    <div className="flex mt-8 text-sm">
      <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mx-1">
        -
      </button>
      <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mx-1">
        1
      </button>
      <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center mx-1">
        +
      </button>
    </div>
  );
};

export default GroupOfButton;
