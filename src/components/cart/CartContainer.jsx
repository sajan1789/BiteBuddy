import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { RiRefreshFill } from 'react-icons/ri'
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import { motion } from 'framer-motion'
import { CartBody } from './CartBody'
import { useDispatch, useSelector } from 'react-redux'
import { clear, toggleCart } from '../../redux/cartSlice'

const CartContainer = () => {
  const isCartVisible = useSelector((state) => state.carts.isCartVisible)
  const cart = useSelector((state) => state.carts.cart)
  const dispatch = useDispatch();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  }

  const handleClear = (e) => {
    dispatch(clear(e))
  }

  if (!isCartVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`fixed top-0 right-0 ${isFullScreen ? 'w-full h-full' : 'md:w-[470px] w-full h-screen'} bg-white drop-shadow-md flex flex-col z-[101]`}
    >
      <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
        <div className='flex items-center gap-2'>
          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={() => dispatch(toggleCart())}
            className='bg-gray-100 rounded-sm px-1 py-[2px] hover:shadow-md'
          >
            <IoClose className='text-textColor text-2xl' />
          </motion.div>

          <motion.div
            whileTap={{ scale: 0.75 }}
            onClick={handleFullScreenToggle}
            className='bg-gray-100 rounded-sm p-[2px] hover:shadow-md'
          >
            {isFullScreen ? (
              <MdFullscreenExit size={22} className='text-textColor' />
            ) : (
              <MdFullscreen size={22} className='text-textColor' />
            )}
          </motion.div>
        </div>

        <p className='text-textColor text-lg font-semibold'>Cart: <span>{cart.length}</span></p>

        <motion.p
        onClick={handleClear}
          whileTap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-1 bg-gray-100 rounded-sm hover:shadow-md cursor-pointer text-orange-600 text-base'
        >
          clear <RiRefreshFill />{" "}
        </motion.p>
      </div>

      {/* cart body */}
      <CartBody />
    </motion.div>
  )
}

export default CartContainer
