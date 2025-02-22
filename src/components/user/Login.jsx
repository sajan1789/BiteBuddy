import React, { useState } from 'react';
import ellipse from '../../assets/ellipses.png';
import logo from '../../assets/shopping.jpeg';
import { NavLink, useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const defaultEmail = "";
const defaultPassword = "password";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    // Check against default credentials
    if (formData.email === defaultEmail && formData.password === defaultPassword) {
      localStorage.setItem("loggedin", true);
      toast.success("Login Successfully!", {
        position: "top-center"
      });
      navigate("/");
      return;
    }

    // Check against stored user data
    if (loggedUser && formData.email === loggedUser.email && formData.password === loggedUser.password) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      toast.error("Failed to login!", {
        position: "top-center"
      });
    }
  };

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: '#0D0D0D'
      }}
    >
      <div
        className='w-full h-screen'
        style={{
          backgroundImage: `url(${ellipse})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className='w-full h-full flex md:flex-row-reverse flex-col-reverse items-center md:py-0 py-6'>
          <div className='flex md:flex-col items-center justify-center md:bg-[rgba(255,255,255,.08)] md:w-[28%] w-full md:h-full md:border border-gray-700 rounded-r-[35px] shadow-2xl md:gap-6 gap-2'>
            <h1 className='md:text-[40px] text-[18px] text-white font-medium text-center md:px-6'>Don't have an account?</h1>
            <div className='flex items-center justify-center'>
              <NavLink to={"/signup"}>
                <button className='hover:shadow-none drop-shadow-lg shadow-lg md:text-white text-blue-400 md:text-[30px] text-[18px] font-medium md:px-4 py-1 md:border md:border-[rgba(255, 255, 255, 1)] md:rounded-md md:bg-gradient-to-t from-[#5A639C] to-[#9B86BD]'>
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>

          <div className='flex w-full h-full items-center justify-center flex-col gap-14'>
            <div className='flex text-white items-center gap-4'>
              <img src={logo} alt="" className='md:w-[50px] w-[60px] h-[60px] rounded-full cursor-pointer' />
              <h1 className='md:text-6xl text-5xl font-bold'>Quicko</h1>
            </div>
            <div className='md:w-[500px] w-full flex flex-col items-center gap-6 md:bg-[rgba(255,255,255,.07)] md:p-10 p-6 rounded-[25px] shadow-2xl md:border border-gray-600'>
              <h1 className='text-white text-[40px] font-medium text-center'>SIGN IN</h1>
              <form onSubmit={handleSubmit} autoComplete="off" className='flex flex-col gap-4 w-full '>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='E-Mail Address'
                  autoComplete="off"
                  className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Password'
                  autoComplete="off"
                  className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
                />
                <div className='flex items-center justify-center w-full pt-2'>
                  <button
                    type="submit"
                    className='w-full px-10 hover:shadow-none transition-all duration-300 shadow-2xl text-white text-[30px] font-medium h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t from-[#5A639C] to-[#9B86BD]'
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
