import React, { useState} from 'react';
import ellipse from '../../assets/ellipses.png';
import profile from '../../assets/shopping.jpeg';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const Profile = () => {
  const [formData, setFormData] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    return savedUser || { name: "", email: "", password: "" };
  });

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update local storage with new user data
    localStorage.setItem("user", JSON.stringify(formData));
    toast.success("Updateed details Successfully!", {
      position: "top-center"
    });
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
        <div>
        <h2 onClick={() => navigate(-1)} className='text-white font-semibold w-full h-full cursor-pointer text-right md:p-10 p-6'>Back</h2>
        <div className='flex w-full h-full items-center justify-center flex-col gap-4'>
        
          <form onSubmit={handleSubmit} className='md:w-[500px] w-full flex flex-col items-center  md:bg-[rgba(255,255,255,.07)] md:p-10 p-6 rounded-[25px] shadow-2xl md:border border-gray-600'>
            <img src={profile} alt="Profile" className='w-[150px] h-[140px]' />
            <div className='w-full flex flex-col gap-6'>
            <h1 className='text-white text-[40px] font-medium text-center'>{user.name}</h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled
                className='outline-none border border-white text-gray-400 w-full px-4 rounded-lg bg-transparent py-[10px]'
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className='outline-none border border-white text-white w-full px-4 rounded-lg bg-transparent py-[10px]'
              />

              <div className='flex items-center justify-center w-full pt-2'>
                <button
                  type="submit"
                  className='hover:shadow-none transition-all duration-300 shadow-2xl text-white text-[30px] font-medium w-full h-[50px] border border-[rgba(255, 255, 255, 1)] rounded-md bg-gradient-to-t from-[#5A639C] to-[#9B86BD]'
                >
                  Update Details
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
