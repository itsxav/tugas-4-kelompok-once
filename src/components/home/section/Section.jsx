import React from 'react'

const Section = () => {
  return (
    <>
    <section className='relative'>
        <div>
            <img className='' src="/img/US_Japan_Japan_Header 1.png" alt="" />
        </div>
        <div className='border border-black absolute w-[768px] h-[325px] bg-white bg-opacity-40 z-10 top-0'></div>
        <div className='border-solid border-8 border-black absolute top-[100px] z-20'>
            <h1 className='text-4xl font-extrabold text-red-800'>Budaya Dan <br /> Makanan Jepang</h1>
            <p className='font-bold'>Jelajahi dan nikmati perjalanan liburan dengan segala keindahan dan keunikan Jepang </p>
        </div>
    </section>
    </>
  )
}

export default Section