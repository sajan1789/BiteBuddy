import React, { useState } from "react";
// import logo from '../../assets/logo.png'

import { MdShoppingBasket, MdLogout, MdOutlineInfo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { RiHome3Line } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import logo from "../../assets/shopping.jpeg";
import profile from "../../assets/avatar.png";
import { motion } from "framer-motion";
import OrderDetailsModal from "../modals/OrdersModal";
import { Link, useNavigate } from "react-router-dom";
import { toggleCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { BiSolidMap } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
import AddressModal from "../modals/AddressModal";
const MobileNavbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const cart = useSelector((state) => state.carts.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const address = useSelector((state) => state.address.address);
  const [userAddress, setUserAddress] = useState("");
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const handleCartVisibility = (e) => {
    dispatch(toggleCart(e));
  };

  const login = () => {
    setIsMenu(!isMenu);
  };
  const totalPrice = useSelector((state) => state.carts.totalPrice);

  const orderDetails = {
    cart,
    subTotal: totalPrice,
    deliveryCharge: 2.5,
    total: totalPrice + 2.5,
    address,
    timestamp: new Date().toISOString(), // Mock timestamp
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  const handleSaveAddress = (address) => {
    setUserAddress(address);
    console.log("Address saved:", address); // Replace with API call if needed
  };
  return (
    <div className="flex items-center justify-between md:hidden  w-full h-full">
      <div className="relative flex items-center justify-center ">
        <MdShoppingBasket
          onClick={handleCartVisibility}
          className="text-textColor  text-2xl  cursor-pointer"
        />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-xs text-white font-semibold">{cart.length}</p>
        </div>
      </div>

      <div>
        <Link
          to={"/"}
          className="flex flex-row items-center gap-2 cursor-pointer"
        >
          <img src={logo} className="w-7 object-cover" alt="logo" />
          <p className="text-headingColor text-[25px] font-bold">DukaaN</p>
        </Link>
      </div>

      <div className="relative ">
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={login}
          src={profile}
          className="w-10 pt-1 min-w-[35px] h-10 min-h-[35px] drop-shadow-md cursor-pointer"
          alt="userProfile"
        >
          {isMenu ? (
            <FaXmark className="w-6 h-6 text-headingColor" />
          ) : (
            <FaBars className="w-6 h-6 text-headingColor" />
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="w-40 bg-gray-50  shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
        >
          {isMenu && (
            <>
              <Link to={"/profile"}>
                <p
                  onClick={() => setIsMenu(false)}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  {" "}
                  <CgProfile /> Profile
                </p>
              </Link>

              <Link to="#" onClick={() => setIsModalOpen(true)}>
        <p
          onClick={() => setIsMenu(false)}
          className="px-4 text-nowrap py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base"
        >
          <BiSolidMap /> {address?"Edit Addresh":"Add Address"} 
        </p>
      </Link>
      <Link to="#" onClick={() => setIsOrdersModalOpen(true)}>
            <p
              className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base"
              onClick={() => setIsOrderModalOpen(true)}
            >
              <LuBox />
              Orders
            </p>
          </Link>

              <Link to={"/login"}>
                <p
                  onClick={handleLogout}
                  className="m-2 px-2 py-[6px]  flex items-center  bg-gray-200 hover:bg-gray-300 gap-3 cursor-pointer hover:text-headingColor transition-all duration-100 ease-in-out text-textColor text-base rounded-md shadow-md"
                >
                  <MdLogout /> Logout{" "}
                </p>
              </Link>
            </>
          )}
        </motion.div>
      </div>
      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAddress}
      />

<OrderDetailsModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        order={orderDetails}
      />
    </div>
  );
};

export default MobileNavbar;
