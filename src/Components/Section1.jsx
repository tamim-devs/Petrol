import React from 'react'
import part1 from "../assets/images/section1part1.jpg"
import part2 from "../assets/images/section1part2.jpg.jpg"
import part3 from "../assets/images/section1part3.jpg.jpg"
import part4 from "../assets/images/section1part4.jpg"

function Section1() {
  return (
    <>
      <div className='py-24'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-col sm:flex-row gap-12 sm:gap-52 items-center justify-between'>
            <div className='w-full sm:w-72'>
              <h2 className='text-4xl sm:text-5xl leading-72px font-bold text-black'>
                The biggest supplier on the country
              </h2>
            </div>
            
            <div className='w-full sm:w-auto'>
              <p className='text-base sm:text-lg'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='py-12'>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-4 justify-center'>
          <div className='w-full sm:w-[458px] h-[300px] sm:h-[426px]'>
            <img src={part1} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-full sm:w-[458px] h-[300px] sm:h-[426px]'>
            <img src={part2} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-full sm:w-[458px] h-[300px] sm:h-[426px]'>
            <img src={part3} alt="" className='w-full h-full object-cover' />
          </div>
          <div className='w-full sm:w-[458px] h-[300px] sm:h-[426px]'>
            <img src={part4} alt="" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>

      <div className='py-24'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-col sm:flex-row items-center justify-between'>
            <div className='flex flex-col'>
              <h2 className='text-4xl sm:text-7xl font-bold w-full sm:w-[29rem]'>
                Our Services
              </h2>
              <p className='text-base sm:text-lg font-medium mt-6 text-gray-600 w-full sm:w-[345px]'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className='w-full sm:w-[990px] h-[300px] sm:h-[410px] bg-part5 flex items-center justify-center flex-col'>
              <div className='flex flex-col gap-4 text-center'>
                <h3 className='text-3xl sm:text-4xl text-white font-bold'>
                  Modern natural oil and gas refineries.
                </h3>
                <button className='w-40 sm:w-44 h-12 sm:h-14 bg-[#F40404] text-white mt-4'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='py-24'>
        <div className='flex flex-col sm:flex-row gap-8 justify-center'>
          <div className='bg-part6 w-full sm:w-[960px] h-[300px] sm:h-[410px] flex items-center justify-center'>
            <div className='flex flex-col gap-y-4 text-center'>
              <h3 className='text-3xl sm:text-4xl text-white font-bold'>
                Supply of national industries.
              </h3>
              <button className='w-40 sm:w-44 h-12 sm:h-14 bg-[#F40404] text-white mt-4'>
                Learn More
              </button>
            </div>
          </div>

          <div className='bg-part7 w-full sm:w-[960px] h-[300px] sm:h-[410px] flex items-center justify-center'>
            <div className='flex flex-col gap-y-4 text-center'>
              <h3 className='text-3xl sm:text-4xl text-white font-bold'>
                National fuel distribution and supply.
              </h3>
              <button className='w-40 sm:w-44 h-12 sm:h-14 bg-[#F40404] text-white mt-4'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1
