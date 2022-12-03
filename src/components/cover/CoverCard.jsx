import React from 'react'
import { covers } from '../../data/Data'

const CoverCard = () => {
  return (
    <>
        <div className='flex justify-evenly'>
            {covers.map((items, index) => (
                <div className='w-44 text-center' key={index}>
                    <img src={items.img} alt="" />
                    <h4>{items.name}</h4>
                    <h4>{items.rating}</h4>
                    <p>{items.description}</p>
                </div>
            ))}
        </div>
    </>
  )
}

export default CoverCard