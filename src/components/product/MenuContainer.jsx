import React from "react";
import MenuList from "./MenuList";
import ProductSearchBar from "./ProductSearchBar";

const MenuContainer = ({ onCategoryClick, selectedCategory, searchQuery, setSearchQuery }) => {
  return (
    <section className="w-full mt-10" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-end ">
          <p className="md:text-3xl text-xl font-bold capitalize text-headingColor ">
          Explore Our Products
          </p>
          <span className="border-2 rounded-full border-orange-600 w-[120px] "></span>
        </div>

        <div className="w-full flex md:flex-row flex-col-reverse items-center justify-between">
          <MenuList onCategoryClick={onCategoryClick} selectedCategory={selectedCategory} />
          <ProductSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default MenuContainer;
