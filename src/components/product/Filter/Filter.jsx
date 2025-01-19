import React from 'react'
import { BsFilterRight } from "react-icons/bs";
import CategoryList from './CategoryList';

const Filter = ({ onCategoryClick, selectedCategory }) => {
  return (
    <div className='w-full  rounded-xl bg-card hover:bg-white border border-gray-200 pb-8'>
        <div className='flex flex-col gap-4 w-full p-4'>
            <div className='flex items-center justify-between border-b border-gray-200'>
                <h1 className='text-[20px] font-medium'>Filters</h1>
                <BsFilterRight size={22} className=''/>
            </div>
            <div className='w-full flex flex-col items-start justify-start gap-6'>
                <div className='w-full '>
                    <CategoryList onCategoryClick={onCategoryClick} selectedCategory={selectedCategory}/>
                </div>

                 <div className='w-full flex flex-col gap-2 '>
                 <h2 className='text-[18px] text-textColor border-b border-gray-200'>Price</h2>
                 <div className='w-full flex items-center gap-2'>
                    <input type="checkbox" className='px-[4px] w-[14px] h-[14px] rounded-none' />
                    <p className='text-textColor text-[16px] '>Low to hight</p>
                 </div>
                 <div className='w-full flex items-center gap-2'>
                    <input type="checkbox" className='px-[4px] w-[14px] h-[14px] rounded-none' />
                    <p className='text-textColor text-[16px] '>Higt to low</p>
                 </div>
                 </div>

                 <div className='w-full flex flex-col gap-2 '>
                 <h2 className='text-[18px] text-textColor border-b border-gray-200'>Dishes Type</h2>
                 <div className='w-full flex items-center gap-2'>
                    <input type="checkbox" className='px-[4px] w-[14px] h-[14px] rounded-none' />
                    <p className='text-textColor text-[16px] '>New</p>
                 </div>
                 <div className='w-full flex items-center gap-2'>
                    <input type="checkbox" className='px-[4px] w-[14px] h-[14px] rounded-none' />
                    <p className='text-textColor text-[16px] '>Most Sold</p>
                 </div>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default Filter