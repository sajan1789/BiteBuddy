import React from "react";
import Header from "../components/header/Header";

const ContactUs = () => {
  return (
    <>
       <Header/>
    <div className="flex flex-col  items-center bg-gray-50 min-h-screen px-6 py-12 mt-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
        Have questions, feedback, or need support? We’d love to hear from you!
        Reach out to us using the form below or through our contact details.
      </p>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors w-full"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Details</h2>
        <p className="text-lg text-gray-600">Phone: +1 (123) 456-7890</p>
        <p className="text-lg text-gray-600">Email: support@fooddeliveryapp.com</p>
        <p className="text-lg text-gray-600">Address: 123 Food Street, Flavor Town</p>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
