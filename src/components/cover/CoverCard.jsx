import React from 'react'
import { covers } from '../../data/Data'

const CoverCard = () => {
  return (
    <>
        <div className='flex justify-evenly text-white text-left space-x-3 mx-3'>
            {covers.map((items, index) => (
                <div className=' bg-red-800 my-3 md:my-5 rounded-lg' key={index}>
                    <img className='w-18 h-28 md:w-44 md:h-52 lg:w-60 lg:h-64 rounded-lg' src={items.img} alt="" />
                    <div className='flex my-2 lg:my-4 mx-2 lg:mx-4 space-x-1 md:space-x-3 lg:space-x-4'>
                      <h4 className='text-[9px] md:text-sm lg:text-lg font-extrabold'>{items.name}</h4>
                      <h4 className='text-[9px] md:text-sm lg:text-lg'>{items.rating}</h4>
                    </div>
                    <div>
                      <p className='text-[8px] md:text-xs lg:text-sm mx-2 lg:mx-4 my-2 lg:my-4 md:w-[140px] lg:w-[200px]'>{items.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default CoverCard