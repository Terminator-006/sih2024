import React from 'react';

export const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full animate-spin-gradient bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400"></div>
        <p className='text-white mt-4'>Life begins at the end of your comfort zone</p>
      </div>
    </div>
  );
};
