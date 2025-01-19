
    import React from 'react'
    // images png
    import app_store from "../../assets/App_store.png";
    import google_play from "../../assets/Google-play.png"
    
    // react icons
    import { FaTwitter } from "react-icons/fa";
    import { FaFacebookF } from "react-icons/fa";
    import { FaInstagram } from "react-icons/fa";
    import { FaLinkedinIn } from "react-icons/fa";
    import { FiYoutube } from "react-icons/fi";
    
    
    export const Footer = () => {
      return (
        <div className='bg-card 2xl:px-[150px]   mx-auto  flex md:items-center md:justify-center'>
            <div className='mt-6  pb-4 '>
                <div className='flex xl:flex-row  flex-col items-center justify-center '>
                <div className='xl:w-1/4 w-full p-4  space-y-5'>
                    <h1 className='xl:text-[40px] md:text-[30px] text-[25px] font-extrabold text-secondary'>Easy <span className='text-red-100'>ahead</span></h1>
                    <p className='md:text-[13px] text-[12px] '>We take the work out of connecting with others
                        so you can accomplish more.
                    </p>
                    <select name="language" id="language" className='text-secondary border-2 text-[13px] xl:w-[280px] md:w-[250px] w-[200px] p-2 px-2 font-bold outline-none rounded-[6px]'>
                        <option value="English" >English (US)</option>
                        <option value="Hindi" >Hindi</option>
                    </select>
                    <div className='flex flex-row items-center space-x-4  '>
                        <img src={app_store} alt="App Store" className='xl:w-[130px] md:w-[110px] w-[90px]' />
                        <img src={google_play} alt="App Store" className='w-[130px] md:w-[110px] w-[90px]' />
                        
                    </div>
                    <div className='flex  space-x-6 '>
                    <FaTwitter className='w-5 h-5 hover:text-blue-400 cursor-pointer' />
                    <FaFacebookF className='w-5 h-5 hover:text-blue-400 cursor-pointer' />
                    <FaInstagram className='w-5 h-5 hover:text-blue-400 cursor-pointer' />
                    <FaLinkedinIn className='w-5 h-5 hover:text-blue-400 cursor-pointer' />
                    <FiYoutube className='w-5 h-5 hover:text-blue-400 cursor-pointer' />
    
                    </div>
                </div>
                <div className=' md:w-3/4 w-full flex md:flex-row flex-col grid md:grid-cols-3 grid-cols-2 gap-6 p-8 xl:px-20 md:px-10 px-4'>
                    <div className='  space-y-3'>
                    <div>
                        <h1 className='text-secondary text-[20px] font-extrabold'>About</h1>
                    </div>
                    <div className='text-[14px] font-medium text-secondary space-y-1 '>
                        <h3>About Calendly</h3>
                        <h3>Contact Sales</h3>
                        <h3>Newsroom</h3>
                        <h3>Careers</h3>
                        <h3>Security</h3>
                    </div>
                    </div>
                    <div className='  space-y-3'>
                    <div>
                        <h1 className='text-secondary text-[20px] font-extrabold'>Solutions</h1>
                    </div>
                    <div className='text-[14px] font-medium text-secondary  space-y-1'>
                        <h3>Customer Success</h3>
                        <h3>Sales</h3>
                        <h3>Recruiting</h3>
                        <h3>Information Technology</h3>
                        <h3>Marketing</h3>
                    </div>
                    </div>
                    <div className='  space-y-3'>
                    <div>
                        <h1 className='text-secondary text-[20px] font-extrabold'>Popular Features</h1>
                    </div>
                    <div className='text-[14px] font-medium text-secondary space-y-1 '>
                        <h3>Fresh food</h3>
                        <h3>Low Price</h3>
                        <h3>Brand Product</h3>
                        <h3>Fast Delivery</h3>
                    </div>
                    </div>
                    <div className='  space-y-3'>
                    <div>
                        <h1 className='text-secondary text-[20px] font-extrabold'>Suppot</h1>
                    </div>
                    <div className='text-[14px] font-medium text-secondary space-y-1 '>
                        <h3>Help Center</h3>
                        <h3>Video Tutorials</h3>
                    </div>
                    </div>
                    <div className='  space-y-3'>
                    <div>
                        <h1 className='text-secondary text-[20px] font-extrabold'>Add-Ons</h1>
                    </div>
                    <div className='text-[14px] font-medium text-secondary space-y-1 '>
                        <h3>Download for Chrome</h3>
                        <h3>Download for Firfox</h3>
                    </div>
                    </div>
                   
                </div>
                </div>
                <div className='flex  justify-between md:p-4 p-2'>
                    <p className='text-secondary text-[10px] '>Dukaan.com All rights reserved</p>
                    <div className='flex space-x-1 items-center'><span className='bg-green-600 w-2 h-2 rounded-full '></span><p className='text-secondary text-[10px] '>Dukaan Status</p></div>
                   <p className='text-secondary text-[10px] '> Privacy / Terms ans Conditions</p>
                    
                </div>
            </div>
        </div>
      )
    }

export default Footer