import React from 'react'
import logo1 from "../assets/images/Logo1.png"
import logo2 from "../assets/images/Logo2.png"
import logo3 from "../assets/images/Logo3.png"
import logo4 from "../assets/images/Logo4.png"

function Section2() {
  return (
    <>
      {/* First section with two blocks */}
      <div className='py-24 bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-col sm:flex-row'>
            <div className='w-full sm:w-[413px] h-[361px] bg-[#F40404] flex items-center justify-center'>
              <h3 className='text-3xl sm:text-4xl text-white font-bold text-center sm:text-start w-full sm:w-60'>
                Learn more about our company
              </h3>
            </div>
            <div className='w-full sm:w-[726px] h-[361px] bg-part8 flex items-center justify-center'>
              <button className='w-44 h-14 bg-white text-[#F40404] font-bold'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logos section */}
      <div className='py-24'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-wrap justify-center gap-6'>
            <img src={logo1} alt="" className="w-[200px] sm:w-[250px] h-auto" />
            <img src={logo2} alt="" className="w-[200px] sm:w-[250px] h-auto" />
            <img src={logo3} alt="" className="w-[200px] sm:w-[250px] h-auto" />
            <img src={logo4} alt="" className="w-[200px] sm:w-[250px] h-auto" />
          </div>
        </div>
      </div>

      {/* Middle sections with images and text */}
      <div className='py-24'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-col sm:flex-row justify-center gap-6 sm:gap-8'>
            <div className='w-full sm:w-[390px] h-[401px] bg-midle1 flex justify-start items-center'>
              <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-2xl sm:text-3xl text-white font-bold w-full sm:w-64'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
                <button className='w-32 h-10 sm:h-12 text-white text-base mt-14 font-bold bg-btnC'>
                  Read more
                </button>
              </div>
            </div>
            <div className='w-full sm:w-[390px] h-[401px] bg-midle2 flex justify-start items-center'>
              <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-2xl sm:text-3xl text-white font-bold w-full sm:w-64'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
                <button className='w-32 h-10 sm:h-12 text-white text-base mt-14 font-bold bg-btnC'>
                  Read more
                </button>
              </div>
            </div>
            <div className='w-full sm:w-[390px] h-[401px] bg-midle3 flex justify-start items-center'>
              <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-2xl sm:text-3xl text-white font-bold w-full sm:w-64'>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
                <button className='w-32 h-10 sm:h-12 text-white text-base mt-14 font-bold bg-btnC'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section2
