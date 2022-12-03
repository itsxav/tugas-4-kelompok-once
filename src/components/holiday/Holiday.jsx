import React from 'react'

const Holiday = () => {
  return (
    <>
        <div className='relative center border-blue-900 border-2 mt-5 lg:mt-8 lg:space-y-5'>
            <h2 className='text-lg md:text-2xl lg:text-4xl font-extrabold text-center mb-1 text-red-800'>Start Your Holiday</h2>
            <div className='space-x-3 flex justify-center border-2 border-green-700'>
                
                <div className='w-[90px] md:w-[100px] lg:w-[190px] h-1 md:h-2 lg:h-4 bg-red-800 mt-2 rounded-xl'></div>
        
                <div className='w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10  bg-red-800 rounded-full'></div>
                
                <div className='w-[90px] md:w-[100px] lg:w-[190px] h-1 md:h-2 lg:h-4 bg-red-800 mt-2 rounded-xl'></div>
                
            </div>
        </div>
    </>
  )
}

export default Holiday