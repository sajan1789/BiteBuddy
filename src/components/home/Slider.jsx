import React, { useState, useEffect } from 'react';
import { slider } from '../../utils/api/sliderApi';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full overflow-hidden ">
      <div className="slider ">
        {slider.map((slide, index) => (
            <div  key={slide.id}>
          <img
            src={slide.img}
            alt={`Slide ${index}`}
            className={` rounded-2xl ${index === currentIndex ? 'active ' : ''}`}
          />
                      
          <div className=' absolute top-[360px] left-[60px] w-[50%] flex flex-col items-start justify-start  gap-1 '>
          <h1 className={`slid md:text-2xl text-xl text-white md:font-bold font-semibold  ${index === currentIndex ? 'active' : ''}`}>{slide.name}</h1>
          <p className={`slid md:text-md text-sm text-white  ${index === currentIndex ? 'active' : ''}`}>{slide.discription}</p>
         
          <button className="opacity-100 absolute md:top-[90px] top-[80px] md:px-4 md:py-3 px-3 py-2 hover:bg-orange-600 text-sm text-white text-center bg-orange-500 rounded-md shadow-xl">See More Dishes</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
