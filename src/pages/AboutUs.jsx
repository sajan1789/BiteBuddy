import React from "react";
import Header from "../components/header/Header";
import logo from '../assets/shopping.jpeg'
const AboutUs = () => {
  return (
    <>
     <Header/>
    <div className="flex flex-col items-center bg-gray-50 min-h-screen px-6 py-12 mt-20">

      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Welcome to our Food Delivery App! We aim to bring delicious meals
        straight to your doorstep with the click of a button. Our mission is to
        connect food lovers with their favorite restaurants, offering a variety
        of cuisines to satisfy every craving.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-6">
        Whether you’re in the mood for a quick snack or a full-course meal,
        we’ve got you covered. We pride ourselves on providing a seamless
        ordering experience, reliable delivery, and exceptional customer
        service.
      </p>
      <p className="text-lg text-gray-600 text-center max-w-2xl">
        Thank you for choosing us as your go-to food delivery platform. Your
        satisfaction is our top priority, and we’re always here to make your
        day tastier!
      </p>
      <img
        src={logo}
        alt="Food Delivery"
        className="mt-8 rounded-lg shadow-lg w-32 mt-4 h-32"
      />
    </div>
  
    </>
  );
};

export default AboutUs;
