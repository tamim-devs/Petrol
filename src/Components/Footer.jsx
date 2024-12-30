import React from 'react'
import logo from "../assets/images/Logo.png"
import { MdOutlineAttachEmail } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'

function Footer() {
  return (
    <div className='pt-40 pb-44 bg-[#1F1F1F]'>
      <div className='max-w-container mx-auto'>
        <div className='flex flex-wrap gap-x-6 justify-between'>
          {/* Contact Info Section */}
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3'>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
              <div className='flex items-center gap-1'>
                <MdOutlineAttachEmail className='text-white text-2xl' />
                <h2 className='text-white text-base'>mail@yourcompany.com</h2>
              </div>
              <div className='flex items-center gap-1'>
                <FaPhoneAlt className='text-white text-base' />
                <h2 className='text-white text-base'>+896 120 5889 (Toll free)</h2>
              </div>
              <div className='flex items-center gap-1'>
                <GoLocation className='text-white text-base' />
                <h2 className='text-white text-base'>101 Baker Street, New York, USA, 12345</h2>
              </div>
              <div className='flex gap-x-4 mt-9'>
                <FaFacebook className='w-8 h-8 bg-red-600 rounded-full text-white' />
                <FaLinkedin className='w-8 h-8 bg-red-600 rounded-full text-white' />
                <FaInstagram className='w-8 h-8 bg-red-600 rounded-full text-white' />
                <FaTwitter className='w-8 h-8 bg-red-600 rounded-full text-white' />
              </div>
            </div>
          </div>

          {/* Company Links Section */}
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 mt-8 sm:mt-0'>
            <h2 className='text-xl text-white font-extrabold'>Company</h2>
            <div className='flex flex-col mt-8 gap-y-4'>
              <h2 className='text-base text-white font-bold'>Home</h2>
              <h2 className='text-base text-white font-bold'>About</h2>
              <h2 className='text-base text-white font-bold'>Services</h2>
              <h2 className='text-base text-white font-bold'>Gallery</h2>
            </div>
          </div>

          {/* Other Links Section */}
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 mt-8 sm:mt-0'>
            <h2 className='text-xl text-white font-extrabold'>Others</h2>
            <div className='flex flex-col mt-8 gap-y-4'>
              <h2 className='text-base text-white font-bold'>Blog</h2>
              <h2 className='text-base text-white font-bold'>Contact</h2>
              <h2 className='text-base text-white font-bold'>Terms & Conditions</h2>
              <h2 className='text-base text-white font-bold'>Privacy Policy</h2>
            </div>
          </div>

          {/* Certificates Section */}
          <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 mt-8 sm:mt-0'>
            <h2 className='text-xl text-white font-extrabold'>Certificate</h2>
            <div className='flex mt-4 gap-x-4'>
              <div className='w-[110px] h-11 rounded-md bg-white flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-[#008AD8] text-2xl font-bold'>ISO 88</h2>
                </div>
              </div>
              <div className='w-[150px] h-11 rounded-md bg-white flex items-center justify-center'>
                <div className='flex items-center justify-center'>
                  <h2 className='text-[#980077] text-2xl font-bold'>Liquid</h2>
                  <h2 className='text-green-800 text-2xl font-bold'>Green</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
