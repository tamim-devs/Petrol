import React from 'react'

function Section3() {
  return (
    <div className='flex flex-col'>
      {/* Background Image Section */}
      <div className='w-full py-28 bg-maps bg-center bg-cover'>
        {/* You can add content here or leave it empty for background */}
      </div>

      {/* Red Section with Text and Button */}
      <div className='w-full py-11 bg-[#F40404] flex flex-col md:flex-row gap-8 items-center justify-center'>
        <h2 className='text-2xl md:text-4xl font-bold text-white text-center md:text-left'>
          Want to join as a member branch in your area?
        </h2>
        <div className='py-4 px-8 border-4 border-white mt-4 md:mt-0'>
          <h2 className='text-base text-white cursor-pointer'>Contact us</h2>
        </div>
      </div>
    </div>
  )
}

export default Section3
