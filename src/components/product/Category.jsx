
import React, { useState } from 'react';
import { products } from '../../utils/api/productApi';
import MenuContainer from './MenuContainer';
import ProductCard from './ProductCard';
import Filter from './Filter/Filter';
import Pagination from './Pagination';
import { useGetData } from '../../react-query/QueriesMutations';
import { Element } from 'react-scroll';

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, error} = useGetData();
  const productsPerPage = 8;


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page on category change
  };

  const allProducts = selectedCategory === 'Electronics' && data ? data : products;
  const combinedProducts = selectedCategory === 'All' && data
    ? [...products, ...data] 
    : allProducts;

  const filteredProducts = combinedProducts.filter((product) => 
    (selectedCategory === "All" || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error : ${error.status}</div>
  if(!data) return <div> No Data Found</div>

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <Element className="w-full element" name='menu'>
      <section>
      <MenuContainer 
        onCategoryClick={handleCategoryClick} 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <div className='flex md:flex-row flex-col w-full gap-4'>
        <div className='md:w-1/5 w-full'>
          <Filter onCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
        </div>


       <div className='md:w-4/5 w-full flex flex-col md:items-end md:justify-end  items-center justify-center gap-6'>
        <div className="w-full flex flex-wrap  md:items-start md:justify-start items-center justify-center gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
      />
      </div>
      </div>
      </section>
    </Element>
  );
};

export default Category;

