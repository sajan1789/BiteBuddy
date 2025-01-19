import React from 'react'
import CartCard from './CartCard'
import chef from '../../assets/chef1.png'
import { useSelector } from 'react-redux'

export const CartBody = () => {
  const cart = useSelector((state) => state.carts.cart)

  return (
    <div className='w-full h-full bg-cartBg flex items-center justify-center rounded-t-[2rem]'>
      {
        cart.length === 0 ? (
          <>
            <div className='w-full flex flex-col items-center gap-4'>
              <p className='text-2xl  text-[#B4B4B8] text-center pt-1 '>Your cart is Empty</p>
              <img src={chef} alt="" className='w-[250px] h-[250px]' />
            </div>
          </>
        ) : (
          <>
            {/* cart card */}
            <CartCard />
          </>
        )
      }

    </div>
  )
}
