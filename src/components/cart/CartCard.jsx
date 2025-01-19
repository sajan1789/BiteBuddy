import React from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { add, decreament, remove } from '../../redux/cartSlice'


const CartCard = () => {
    const cart = useSelector((state) => state.carts.cart)
    const totalPrice = useSelector((state) => state.carts.totalPrice)
    const dispatch = useDispatch()

    const handleRemove = (e) => {
        dispatch(remove(e))
    }

    const handleIncreament = (e) => {
        dispatch(add(e))
    }

    const handleDec = (e) => {
        dispatch(decreament(e))
    }

    const DELIVERY_CHARGE = 2.5;
    const subTotal = totalPrice;
    const total = subTotal + DELIVERY_CHARGE;

    return (
        <div className='w-full h-full flex flex-col'>
             <div className='w-full h-[400px] md:h-42 px-6 py-8 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                   {cart.map((item) => (
                        <div key={item.id} className='w-full px-4 h-[70px] rounded-lg bg-cartItem flex items-center justify-between shadow-md gap-6'>
                             <div className='flex items-center gap-6 '>
                            <img src={item.photo} alt="cart item" className='w-16 h-16 max-w-[60px] rounded-full object-contain' />
                            <div className=' flex-col flex'>
                                <p className='text-base text-sm text-gray-50'>{item.name}</p>
                                <p className='text-[13px] block text-gray-300 font-semibold'><span className='text-red-600'>₹ </span>{item.price}</p>
                            </div>
                            </div>
                            <p className='text-center md:flex hidden text-[13px] text-gray-300 font-semibold'><span className='text-red-600'>₹</span>{(item.price * item.qnty)}</p>
                            <div className='flex items-center gap-6 '>
                            <div className='flex items-center gap-2'>
                                <motion.button
                                    onClick={item.qnty <= 1 ? () => handleRemove(item.id) : () => handleDec(item)}
                                    whileTap={{ scale: 0.75 }}>
                                    <BiMinus className="text-gray-50" />
                                </motion.button>
                                <p className='w-5 h-5 p-[13px] rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>{item.qnty}</p>
                                <motion.button
                                    onClick={() => handleIncreament(item)}
                                    whileTap={{ scale: 0.75 }}>
                                    <BiPlus className="text-gray-50" />
                                </motion.button>
                            </div>
                            <motion.div
                                onClick={() => handleRemove(item.id)}
                                whileTap={{ scale: 0.76 }}>
                                <BiTrash size={19} className='cursor-pointer text-red-500' />
                            </motion.div>
                            </div>
                        </div>
                    ))}
             </div>
           
            <div className='w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Sub Total</p>
                    <p className='text-lg block text-gray-400 font-semibold'><span className='text-red-600'>₹ </span>{subTotal}</p>
                </div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-lg'>Delivery Charge</p>
                    <p className='text-lg block text-gray-400 font-semibold'><span className='text-red-600'>₹ </span>{DELIVERY_CHARGE}</p>
                </div>
                <div className='w-full border-b border-gray-600 my-2'></div>
                <div className='w-full flex items-center justify-between'>
                    <p className='text-gray-400 text-xl font-semibold'>Total</p>
                    <p className='text-gray-400 text-xl font-semibold'><span className='text-red-600'>₹ </span>{total}</p>
                </div>
                <motion.button
                    whileTap={{ scale: 0.85 }}
                    type='button'
                    className='w-full p-2 rounded-lg bg-orange-400 text-gray-50 text-lg my-2 hover:shadow-lg hover:bg-orange-600'
                >
                    Check Out
                </motion.button>
            </div>
        </div>
    )
}

export default CartCard
