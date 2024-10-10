import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdOutlineAttachEmail } from 'react-icons/md'
import Logo from "../assets/images/Logo.png"


function Navbar() {
  return (
    <>
    <div className='bg-black'>
       <div className='max-w-container mx-auto'>
          <div className='flex items-center justify-between'>
              <div className='flex gap-x-7 items-center'>
                  <div className='flex items-center gap-1'>
                     <MdOutlineAttachEmail  className='text-white text-2xl'/>
                      <h2 className='text-white text-base '>mail@yourcompany.com</h2>
                  </div>              
                  <div className='flex items-center gap-1'>
                     <FaPhoneAlt  className='text-white text-base'/>
                      <h2 className='text-white text-base '>+896 120 5889 (Toll free)</h2>
                  </div>              
               
              </div>
              <div className='flex items-center gap-4'>
                  <div><FaFacebookF className='text-white' /></div>
                  <div><FaTwitter className='text-white'/></div>
                  <div><FaLinkedinIn className='text-white'/></div>
                  <div><FaInstagram className='text-white'/></div>
              </div>
          </div>
       </div>
    </div>


    <nav className='py-7 bg-red-600'>
        <div className='max-w-container mx-auto '>
            <div className='flex items-center justify-between'>
                <div><img src={Logo} alt="" /></div>
                <div className='flex items-center gap-12 list-none cursor-pointer'>
                    <li className='text-base text-white font-bold'>Home</li>
                    <li className='text-base text-white font-bold'>About</li>
                    <li className='text-base text-white font-bold'>Services</li>
                    <li className='text-base text-white font-bold'>Gallery</li>
                </div>
                <div className='py-4 px-8 border-4 border-white'>
                    <h2 className='text-base text-white cursor-pointer'>Contact us</h2>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar