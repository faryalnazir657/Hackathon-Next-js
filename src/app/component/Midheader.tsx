import Image from 'next/image';
import React from 'react';

const Midheader = () => {
  return (
    <div className="bg-[#F0F2F3] w-full h-[60px] flex justify-between items-center px-10">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <Image src="/image/Logo Icon.png" alt="Logo Icon" width={40} height={40} />
        <h1 className="text-[#272343] text-3xl font-semibold">Comforty</h1>
      </div>

      {/* Cart Section */}
      <div className="flex items-center gap-4">
        <Image src="/image/Buy 2.png" alt="Cart Icon" width={22} height={22} />
        <h1 className="text-[#272343] text-sm font-normal">Cart</h1>
        <div className="flex items-center">
          <Image src="/image/No.png" alt="Notification Icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Midheader;
