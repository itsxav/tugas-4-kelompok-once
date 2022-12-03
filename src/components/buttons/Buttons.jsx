import React from 'react'

const Buttons = () => {
  return (
    <>
        <div className='flex justify-center mt-8'>
            <div className='px-7'>
                <button className='w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-red-800 rounded-full'>
                    <h3 className='text-white font-semibold text-[11px] md:text-sm lg:text-lg'>Rekomendasi Tempat</h3>
                </button>
            </div>
            <div className='px-7'>
                <button className='w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-red-800 rounded-full'>
                    <h3 className='text-white font-semibold text-[11px] md:text-sm lg:text-lg'>Rekomendasi Tempat</h3>
                </button>
            </div>
        </div>
    </>
  )
}

export default Buttons