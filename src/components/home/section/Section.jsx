import React from 'react'

const Section = () => {
  return (
    <>
    <section className='relative'>
        <div>
            <img className='lg:w-full' src="/img/US_Japan_Japan_Header 1.png" alt="" />
        </div>
        <div className=' absolute w-[320px] h-[130px] md:w-[768px] md:h-[300px] lg:w-full lg:h-full bg-white bg-opacity-40 z-10 top-0'></div>
        <div className='absolute top-1 py-3 pl-6 z-20  md:pl-8 md:my-12 lg:my-24 lg:pl-20 lg:space-y-3'>
            <h1 className='text-xl font-extrabold text-red-800 md:text-5xl lg:text-6xl'>Budaya Dan <br /> Makanan Jepang</h1>
            <p className='font-bold text-red-800 text-[9px] md:text-base lg:text-lg'>Jelajahi dan nikmati perjalanan liburan dengan segala <br /> keindahan dan keunikan Jepang </p>
        </div>
    </section>
    </>
  )
}

export default Section