import React from 'react'
import heroBg from '../../assets/heroBg.png'
import { heroData } from '../../utils/data'
import { motion } from 'framer-motion'
import Slider from './Slider'


const HomeContainer = () => {

  return (
    <section className=' w-full flex' id="home" >
      {/* left container */}

      <div className='w-full relative'>
        <div className='w-full lg:flex'>

          <div className='w-[75%] w-full  '>
            <Slider />
          </div>
          <img src={heroBg} className='ml-auto w-full lg:w-auto md:h-[550px] h-[430px] ' alt="cardBg" />
          
        </div>

        <div className='md:w-[50%] w-full absolute top-10 right-0 '>

          <div className='w-full h-full  flex items-center justify-center lg:px-20  gap-x-8 md:gap-y-16 gap-y-10 flex-wrap '>
            {heroData && heroData.map((n) => (
              <motion.div whileHover={{ scale: 1.06 }} key={n.id} className='lg:w-190  p-4 transition-all duration-300 bg-gray-100 hover:bg-white rounded-xl shadow-xl flex flex-col items-center  hover:rounded-md cursor-pointer justify-center'>
                <img src={n.imageSrc} className='lg:w-40 w-20 -mt-8 lg:-mt-20 ' alt="I1" />
                <p className='text-base lg:text-xl font-semibold text-textColor'>{n.name}</p>
                <p className='text-[12px] lg:text-sm text-lighttextGray font-medium my-1 lg:my-3'>{n.decription}</p>
                <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>₹</span> {n.price*50}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer