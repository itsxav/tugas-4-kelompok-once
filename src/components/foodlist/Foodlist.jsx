import React from 'react'
import FoodPicture from './FoodPicture'


const Foodlist = () => {
  return (
    <>
        <div>
            <h2 className='text-center my-3'>TOP REKOMENDASI</h2>
            <div>
                <FoodPicture/>
            </div>
        </div>
    </>
  )
}

export default Foodlist