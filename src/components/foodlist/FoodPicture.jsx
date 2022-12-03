import React from 'react'
import {feed } from '../../data/Data'

const FoodPicture = () => {
    return (
      <>
          <div className='flex justify-evenly text-[white]'>
              {feed.map((items, index) => (
                  <div className='w-44 text-center bg-red-800 my-3 md:pb-2 space-x-3 mx-3 rounded-lg' key={index}>
                      <img  className='w-24 h-24 md:w-44 md:h-52 rounded-lg' src={items.img} alt="" />
                      <div className='mb-2 text-left ml-2'>
                      <h4 className='text-lg md:text-2xl font-bold md:pt-2'>{items.name}</h4>
                      <h4 className='text-[9px] md:text-[11px]'>{items.price}</h4>
                      </div>
                  </div>
              ))}
          </div>
      </>
    )
  }

export default FoodPicture