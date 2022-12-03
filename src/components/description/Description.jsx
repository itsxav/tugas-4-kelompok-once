import React from 'react'

const Description = () => {
  return (
    <>
    <div className='relative rounded-xl bg-red-800 flex justify-center mx-2 my-7 h-32 w-70 md:mx-20 space-x-2 md:space-x-7 lg:space-x-16 lg:mx-32 lg:h-52'>
        <div className='px-2'>
            <img className='w-36 mx-2 mt-9 md:my-5 lg:my-12 lg:w-48' src="/img/Japan.png" alt="" />
        </div>
        <div className=' w-80 my-6 px-2 md:my-5 lg:my-10'>
            <p className='text-[8px] md:text-xs lg:text-sm text-white font-semibold text-center'>Jepang adalah negara kepulauan terbesar ketiga di dunia (6.852 pulau) setelah Indonesia (13.466 pulau). Pulau-pulau utama dari utara ke selatan adalah Hokkaido, Honshu (pulau terbesar), Shikoku, dan Kyushu. Sekitar 97% wilayah daratan Jepang berada di keempat pulau terbesarnya.</p>
        </div>
    </div>
    </>
  )
}

export default Description