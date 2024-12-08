import React from 'react';

const Topheader = () => {
  return (
    <div className="bg-[#272343] w-full h-[45px] px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="text-white text-sm">
        <h1>Free Shipping On All Orders Over $50</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <h2 className="text-white cursor-pointer">Eng</h2>
        <h3 className="text-white cursor-pointer">FAQs</h3>
        <h4 className="text-white cursor-pointer">Need Help</h4>
      </div>
    </div>
  );
};

export default Topheader;
