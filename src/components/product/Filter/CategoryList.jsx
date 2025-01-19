import React from 'react';
import { categories } from '../../../utils/data';
import { IoIosArrowDown } from "react-icons/io";


const CategoryList = ({ onCategoryClick, selectedCategory }) => {
  return (
    <div className="w-full flex flex-col items-start gap-2  overflow-x-scroll scrollbar-none">
        <h2 className='text-[18px] text-textColor'>Category</h2>
      <div className="relative w-full ">
        <select
          className="bg-card border border-gray-200 rounded-md text-[15px] text-textColor px-8 py-2 cursor-pointer outline-none   appearance-none w-full"
          onChange={(e) => onCategoryClick(e.target.value)}
          value={selectedCategory}
        >
          {categories && categories.map((category) => (
            <option
              key={category.id}
              value={category.name}
              className={`py-2 px-4 rounded-none ${
                selectedCategory === category.name ? "bg-cartNumBg text-white " : ""
              }`}
            >
              {category.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 left-0 flex items-center px-2 pointer-events-none">
        <IoIosArrowDown className='text-textColor text-[20px]'/>

        </div>
      </div>
    </div>
  );
};

export default CategoryList;
