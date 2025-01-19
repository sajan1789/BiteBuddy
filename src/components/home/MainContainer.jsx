import React, { useState } from 'react';
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import RowContainer from './RowContainer';
import { carousel } from '../../utils/data';
import Category from '../product/Category';
import Cart from '../cart/Cart';

const MainContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === carousel.length - 1) {
          return 0; // Return to the first item if at the end
        } else {
          return prevIndex + 1; // Move to the next item
        }
      });
    };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className='w-full mt-10'>
        <div className='w-full flex items-center justify-between '>
          <div className='flex flex-col gap-2'>
          <p className='md:text-3xl text-xl font-bold capitalize text-headingColor '>
            Our fresh & healthy fruits 
          </p>
          
          <span className='border-2 rounded-full border-orange-600 w-[135px] '></span>
          </div>

          <div className='hidden md:flex gap-3 items-center'>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={prevSlide}
              className={`w-8 h-8 rounded-lg ${
                currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'
              } flex items-center justify-center`}
            >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={nextSlide}
              className='w-8 h-8 rounded-md flex items-center justify-center bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg'
            >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>

        <RowContainer value={{ currentIndex }} />
      </section>

      {/* categories */}
       <Category />

       {/* Cart Container */}
       <Cart />

    
    </div>
  );
};

export default MainContainer;
