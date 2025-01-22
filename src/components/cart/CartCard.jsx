import React, { useState } from "react";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { add, clear, decreament, remove } from "../../redux/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentModal from "../modals/PaymentModal";
import { addOrder } from "../../redux/orderSlice";

const CartCard = () => {
  const cart = useSelector((state) => state.carts.cart);
  const address = useSelector((state) => state.address.address);
  const totalPrice = useSelector((state) => state.carts.totalPrice);
  const dispatch = useDispatch();
   console.log(address)
  const DELIVERY_CHARGE = 40;
  const subTotal = totalPrice;
  const total = subTotal + DELIVERY_CHARGE;

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleRemove = (e) => {
    dispatch(remove(e));
  };

  const handleIncreament = (e) => {
    dispatch(add(e));
  };

  const handleDec = (e) => {
    dispatch(decreament(e));
  };

  const handleCheckout = () => {
    if (!address) {
      toast.error("Please add your delivery address before proceeding!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }
  
    // Open payment modal
    setIsPaymentModalOpen(true);
  };
  
  const handlePayment = (paymentInfo) => {
    // Prepare order details
    const orderDetails = {
      cart: [...cart], // Clone the current cart details
      total: total, // Total price including delivery charge
      address: address, // Delivery address
      timestamp: new Date().toISOString(), // Timestamp for the order
    };
  
    // Dispatch action to store the order in orderSlice
    dispatch(addOrder(orderDetails));
  
    // Provide a toast notification
    toast.success("Order placed successfully!", {
      position: "top-center",
      autoClose: 3000,
      theme: "colored",
    });
  
    // Close the payment modal
    setIsPaymentModalOpen(false);
  
    // Clear the cart
    dispatch(clear());
  };
  


  return (
    <div className="w-full h-full flex flex-col">
      {/* Cart Items */}
      <div className="w-full h-[400px] md:h-42 px-6 py-8 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
        {cart.map((item) => (
          <div
            key={item.id}
            className="w-full px-4 h-[70px] rounded-lg bg-cartItem flex items-center justify-between shadow-md gap-6"
          >
            <div className="flex items-center gap-6 ">
              <img
                src={item.photo}
                alt="cart item"
                className="w-16 h-16 max-w-[60px] rounded-full object-contain"
              />
              <div className="flex-col flex">
                <p className="text-base text-sm text-gray-50">{item.name}</p>
                <p className="text-[13px] block text-gray-300 font-semibold">
                  <span className="text-red-600">₹ </span>
                  {item.price*40}
                </p>
              </div>
            </div>
            <p className="text-center md:flex hidden text-[13px] text-gray-300 font-semibold">
              <span className="text-red-600">₹</span>
              {item.price*40 * item.qnty}
            </p>
            <div className="flex items-center gap-6 ">
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={
                    item.qnty <= 1
                      ? () => handleRemove(item.id)
                      : () => handleDec(item)
                  }
                  whileTap={{ scale: 0.75 }}
                >
                  <BiMinus className="text-gray-50" />
                </motion.button>
                <p className="w-5 h-5 p-[13px] rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                  {item.qnty}
                </p>
                <motion.button
                  onClick={() => handleIncreament(item)}
                  whileTap={{ scale: 0.75 }}
                >
                  <BiPlus className="text-gray-50" />
                </motion.button>
              </div>
              <motion.div
                onClick={() => handleRemove(item.id)}
                whileTap={{ scale: 0.76 }}
              >
                <BiTrash size={19} className="cursor-pointer text-red-500" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Sub Total</p>
          <p className="text-lg block text-gray-400 font-semibold">
            <span className="text-red-600">₹ </span>
            {subTotal}
          </p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-lg">Delivery Charge</p>
          <p className="text-lg block text-gray-400 font-semibold">
            <span className="text-red-600">₹ </span>
            {DELIVERY_CHARGE}
          </p>
        </div>
        <div className="w-full border-b border-gray-600 my-2"></div>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-400 text-xl font-semibold">Total</p>
          <p className="text-gray-400 text-xl font-semibold">
            <span className="text-red-600">₹ </span>
            {total}
          </p>
        </div>
        <motion.button
        whileTap={{ scale: 0.85 }}
        type="button"
        className="w-full p-2 rounded-lg bg-orange-400 text-gray-50 text-lg my-2 hover:shadow-lg hover:bg-orange-600"
        onClick={handleCheckout}
      >
        Check Out
      </motion.button>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onPayment={handlePayment}
      />
      </div>

    
    </div>
  );
};

export default CartCard;
