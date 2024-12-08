
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-slate-50 w-[1740px] ">
     <div className="w-full max-w-screen-xl h-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
      </div>
      {/* Header Section */}
      <div className="flex justify-between items-center px-8 py-9 p-0 mr-5 m-11">
        <h1 className="text-xl font-light">WELCOME TO CHAIRY</h1>
      </div>

      {/* Hero Text */}
      <div className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6 p-9 m-12">
        <p>
          Best Furniture <br />
          Collection For<br />
         Your Interior.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="px-10 py-1 mr-9 p-2 ml-7">
        <Image
          src="/image/Button.png"
          alt="Call to Action Button"
          width={171}
          height={52}
          className="cursor-pointer"
        />
      </div>

      {/* Product Image */}
      <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex  absolute right-0 top-56 p-9 -mr-36">
        <Image
          src="/image/Product Image.png"
          alt="Product Image"
          width={334}
          height={300}
        />
      </div>


      <div className="bg-white flex justify-center items-center py-4 -ml-40">
          <Image 
             src="/image/Company Logo.png" 
             alt="Company Logo" 
             width={1200} 
             height={200} 
             className="object-contain"
            />
      </div>

             {/*Heading 1*/}
        <div className='text-[#272343] bg-white font-bold '>
           <h1 className='flex justify-center w-[286px] h-[35px]'>
            Feautred Product</h1>
        </div>

                {/*Products 1*/}
           <div className="grid grid-cols-4 gap-0 p-4 bg-white">
            <Image src={'/image/Products.png'} alt={'Product'} width={312} height={377}></Image>
            <Image src={'/image/Products (1).png'} alt={'Product'} width={312} height={377}></Image>
            <Image src={'/image/Products (2).png'} alt={'Product'} width={312} height={377}></Image>
            <Image src={'/image/Products (3).png'} alt={'Product'} width={312} height={377}></Image>
          </div>    
        
           {/*Categories*/}
         <div className='bg-white flex justify-center items-center'>
           <Image src='/image/Top Categories.png' alt='cate' width={2216} height={508}></Image>
         </div>
                  
                  {/*products 2*/}
          <div className='flex justify-center items-center bg-white'>
              <Image src='/image/Our Products.png' alt="our" width={1320} height={919}></Image>
           </div>


    </div>
  );
};

export default Hero;
