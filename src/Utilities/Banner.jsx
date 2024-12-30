import React from 'react'

function Banner() {
  return (
    <>
      <div className='bg-banner bg-cover bg-no-repeat bg-center py-72 sm:py-40'>
        <div className='max-w-container mx-auto'>
          <div className='flex flex-col gap-2'>
            {/* Main Heading */}
            <h2 className='text-white text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-full sm:w-auto'>
              We exist since 1975 in the oil and gas industry.
            </h2>
            
            {/* Learn More Button */}
            <div className='w-48 h-14 flex items-center justify-center mt-4 border-4 border-red-600 bg-red-600 cursor-pointer sm:w-40'>
              <h2 className='text-base text-white font-bold'>LEARN MORE</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
