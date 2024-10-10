import React from 'react'
import logo1 from "../assets/images/Logo1.png"
import logo2 from "../assets/images/Logo2.png"
import logo3 from "../assets/images/Logo3.png"
import logo4 from "../assets/images/Logo4.png"

function Section2() {
  return (
    <>
    <div className='py-24 bg-[#F0F0F0]'>
        <div className='max-w-container mx-auto'>
            <div className='flex'>
                <div className='w-[413px] h-[361px] bg-[#F40404] flex items-center justify-center'>
                  <h3 className='text-4xl text-white font-bold w-60'>Learn more about our company</h3>
                </div>
                <div className='w-[726px] h-[361px] bg-part8 flex items-center justify-center'>
                <button className='w-44 h-14 bg-white text-[#F40404] font-bold '>Learn More</button>
                </div>
            </div>
        </div>
    </div>

    <div className='py-24'>
        <div className='max-w-container mx-auto'>
            <div className='flex items-center justify-center gap-x-6'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
        </div>
    </div>

    <div className='py-24'>
      <div className='max-w-container mx-auto'>
          <div className='flex items-center gap-x-8 justify-center'>
              <div className='w-[390px] h-[401px] bg-midle1 flex justify-start items-center'>

                <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-3xl text-start w-64 font-bold  text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                <button className=' w-32 h-[38.722px;] text-white text-base mt-14 font-bold bg-btnC'>Read more</button>
                </div>
                
              </div>
              <div className='w-[390px] h-[401px] bg-midle2 flex justify-start items-center'>

                <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-3xl text-start w-64 font-bold  text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                <button className=' w-32 h-[38.722px;] text-white text-base mt-14 font-bold bg-btnC'>Read more</button>
                </div>
                
              </div>
              <div className='w-[390px] h-[401px] bg-midle3 flex justify-start items-center'>

                <div className='flex flex-col gap-y-6 ml-4'>
                <p className='text-3xl text-start w-64 font-bold  text-white'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                <button className=' w-32 h-[38.722px;] text-white text-base mt-14 font-bold bg-btnC'>Read more</button>
                </div>
                
              </div>
             
          </div>
      </div>
    </div>
    </>
  )
}

export default Section2