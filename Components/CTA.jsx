'use client'
import React from 'react';

const CTA = () => {
  return (
    <div className="w-2/3 h-[10vh] flex justify-center pl-[1.5vw] items-center bg-gray-100">
      <div className="relative">
        <input
          type="email"
          placeholder="What is your work email"
          className="pl-4 pr-[120px]  py-3 rounded-2xl border-2 border-gray-300 h-[4vw] w-[30vw] sm:w-[400px focus:outline-none focus:border-gray-500"
        />
        <button className="absolute h-[3vw] top-1/2 right-2 capitalize transform -translate-y-1/2 bg-[#393E46] text-white font-semibold px-4 py-2 rounded-xl ">
          get started
        </button>
      </div>
    </div>
  );
};

export default CTA;