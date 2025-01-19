import React from 'react';

const ProductSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className='md:w-[50%] w-full md:mt-0 mt-10 '>
      <div className='w-full relative'>
        <input 
          type="search" 
          placeholder='Search for products, brands and more'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-full outline-none py-[8px] px-4 pe-[100px]  border border-gray-200 bg-card rounded-md'
        />
        <button className='absolute top-[4.5px] right-[6px] text-white text-sm font-medium bg-red-500 rounded-md px-6 py-[6px]'>
          Search
        </button>
      </div>
    </div>
  );
};

export default ProductSearchBar;
