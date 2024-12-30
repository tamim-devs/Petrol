import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdOutlineAttachEmail } from 'react-icons/md'
import Logo from "../assets/images/Logo.png"

function Navbar() {
  return (
    <>
      {/* Top Contact Information Bar */}
      <div className='bg-black'>
  <div className='max-w-container mx-auto'>
    <div className='flex flex-col md:flex-row items-center justify-between py-2'>
      {/* Left Section (Email and Phone) */}
      <div className='flex flex-col md:flex-row gap-4 md:gap-7 items-center'>
        <div className='flex items-center gap-1'>
          <MdOutlineAttachEmail className='text-white text-2xl' />
          <h2 className='text-white text-base'>mail@yourcompany.com</h2>
        </div>
        <div className='flex items-center gap-1'>
          <FaPhoneAlt className='text-white text-base' />
          <h2 className='text-white text-base'>+896 120 5889 (Toll free)</h2>
        </div>
      </div>

      {/* Right Section (Social Media Icons) */}
      <div className='flex gap-4 mt-4 md:mt-0'>
        <div><FaFacebookF className='text-white text-2xl' /></div>
        <div><FaTwitter className='text-white text-2xl' /></div>
        <div><FaLinkedinIn className='text-white text-2xl' /></div>
        <div><FaInstagram className='text-white text-2xl' /></div>
      </div>
    </div>
  </div>
</div>


      {/* Main Navbar */}
      <nav className='py-7 bg-red-600'>
        <div className='max-w-container mx-auto'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <div>
              <img src={Logo} alt="Logo" />
            </div>

            {/* Navigation Links */}
            <div className='hidden sm:flex items-center gap-12 list-none cursor-pointer'>
              <li className='text-base text-white font-bold'>Home</li>
              <li className='text-base text-white font-bold'>About</li>
              <li className='text-base text-white font-bold'>Services</li>
              <li className='text-base text-white font-bold'>Gallery</li>
            </div>

            {/* Contact Button */}
            <div className='py-4 px-8 border-4 border-white hidden sm:block'>
              <h2 className='text-base text-white cursor-pointer'>Contact us</h2>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='sm:hidden'>
              <button className='text-white'>
                <span className='block w-6 h-1 bg-white mb-2'></span>
                <span className='block w-6 h-1 bg-white mb-2'></span>
                <span className='block w-6 h-1 bg-white'></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
