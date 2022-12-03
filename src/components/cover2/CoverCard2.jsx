import React from 'react'
import { covers2 } from '../../data/Data'

const CoverCard2 = () => {
  return (
    <>
        <div className=' border-3 border-black flex justify-evenly'>
            {covers2.map((items, index) => (
                <div className='  border-red-800 w-44' key={index}>
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

export default CoverCard2