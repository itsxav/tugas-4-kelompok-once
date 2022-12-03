import React from 'react'
import CoverCard from './CoverCard'

const Cover = () => {
  return (
    <>
        <div>
            <h2 className='font-bold text-center text-red-800 mt-3 md:my-5 md:mt-10 md:text-3xl'>TOP REKOMENDASI</h2>
            <div>
                <CoverCard/>
            </div>
        </div>
    </>
  )
}

export default Cover