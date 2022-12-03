import React from 'react'
import {feed } from '../../data/Data'

const FoodPicture = () => {
  return (
    <>
        <div className='flex justify-evenly text-[white]'>
            {feed.map((items, index) => (
                <div className='w-44 text-center bg-red-800 my-3 mx-4' key={index}>
                    <img  className='w-20 h-24' src={items.img} alt="" />
                    <div className='my-2 text-left ml-2'>
                    <h4 className='text-lg '>{items.name}</h4>
                    <h4 className='text-[9px]'>{items.price}</h4>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default FoodPicture