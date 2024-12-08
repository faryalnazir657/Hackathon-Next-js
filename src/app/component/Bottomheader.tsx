import React from 'react';

const Bottomheader = () => {
  return (
    <div className="bg-[#FFFFFF] w-full h-[74px] flex justify-between items-center px-10">
      {/* Navigation Links */}
      <ul className="flex items-center gap-8 text-lg list-none">
        <li className="text-[#007580] cursor-pointer hover:underline">Home</li>
        <li className="text-[#636270] cursor-pointer hover:underline">Shop</li>
        <li className="text-[#636270] cursor-pointer hover:underline">Product</li>
        <li className="text-[#636270] cursor-pointer hover:underline">Pages</li>
        <li className="text-[#636270] cursor-pointer hover:underline">About</li>
      </ul>

      {/* Contact Info */}
      <div className="flex items-center gap-4">
        <span className="text-[#636270] font-medium">Contact:</span>
        <span className="text-[#272343] font-bold">(808) 555-0111</span>
      </div>
    </div>
  );
};

export default Bottomheader;

 