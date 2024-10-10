import React from 'react'

function Banner() {
  return (
    <>
    <div className='bg-banner bg-cover bg-no-repeat bg-center py-72'>
        <div className='max-w-container mx-auto '>
            <div className='flex flex-col gap-2'>
                <h2 className='text-white text-6xl font-bold w-760px'>We exist since 1975 on the oil and gas industry.</h2>
                <div className=' w-48 h-14 flex items-center justify-center mt-4 border-red-600 bg-red-600'>
                    <h2 className='text-base text-white cursor-pointer font-bold'>LEARN MORE</h2>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Banner