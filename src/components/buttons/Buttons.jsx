import React from 'react'

const Buttons = () => {
  return (
    <>
        <div className='border-4 border-red-400 flex justify-center'>
            <div className='p-1'>
                <button className='w-28 h-28 bg-red-800 rounded-full'>
                    <h3 className='text-white font-semibold'>Rekomenasi Tempat</h3>
                </button>
            </div>
            <div className='p-1'>
                <button className='w-28 h-28 bg-red-800 rounded-full'>
                    <h3 className='text-white font-semibold'>Rekomendasi Tempat</h3>
                </button>
            </div>
        </div>
    </>
  )
}

export default Buttons