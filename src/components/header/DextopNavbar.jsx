import React, { useState } from "react";

import { MdShoppingBasket, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { CgAddR } from "react-icons/cg";
import profile from "../../assets/avatar.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/cartSlice";
import { BiSolidMap } from "react-icons/bi";
import AddressModal from "../modals/AddressModal";
import { LuBox } from "react-icons/lu";
import OrderDetailsModal from "../modals/OrdersModal";

const DextopNavbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.carts.cart);
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address.address);
  const handleCartVisibility = (e) => {
    dispatch(toggleCart(e));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const totalPrice = useSelector((state) => state.carts.totalPrice);

  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const orderDetails = {
    cart,
    subTotal: totalPrice,
    deliveryCharge: 2.5,
    total: totalPrice + 2.5,
    address,
    timestamp: new Date().toISOString(), // Mock timestamp
  };
  const login = () => {
    setIsMenu(!isMenu);
  };
  const handleNavigate = () => {
    navigate("/about"); // Navigate to the About page
  };
  const handleNavigates = () => {
    navigate("/contactUs");
  };

  const handleNavigateHome = () => {
    navigate("/"); // Navigate to the home page
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  const handleSaveAddress = (address) => {
    setUserAddress(address);
    console.log("Address saved:", address); // Replace with API call if needed
  };

  return (
    <div className="flex items-center gap-8">
      <ul className="flex items-center gap-8 ">
        <li
          className="text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
          onClick={handleNavigateHome} // Add onClick event for navigation
        >
          Home
        </li>
        <li
          onClick={handleNavigates}
          className="text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
        >
          ContactUs
        </li>
        <li
          onClick={handleNavigate}
          className="text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
        >
          {" "}
          About Us
        </li>
        <li
          onClick={() => navigate("/MyTeam")}
          className="text-base text-textColor font-medium hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
        >
          {" "}
          Meet My Team
        </li>
      </ul>

      <div
        onClick={handleCartVisibility}
        className="relative flex items-center justify-center "
      >
        <MdShoppingBasket className="text-textColor  text-2xl  cursor-pointer" />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
          <p className="text-xs text-white font-semibold">{cart.length}</p>
        </div>
      </div>

      <div className="relative">
        <motion.img
          whileTap={{ scale: 0.8 }}
          onClick={login}
          src={profile}
          className="w-10 min-w-[35px] h-10 -mt-1 min-h-[35px] drop-shadow-md cursor-pointer"
          alt="userProfile"
        />

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

export default DextopNavbar;
