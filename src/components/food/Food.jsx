import React from 'react'
import Buttons from '../buttons/Buttons'
import Holiday from '../holiday/Holiday'
import Foodlist from '../foodlist/Foodlist'
import Foodlist2 from '../foodlist2/Foodlist2'
import FoodPicture2 from '../foodlist2/FoodPicture2'
import Footer from '../footer/Footer'

const Food = () => {
  return (
    <>
       <Holiday/> 
       <Buttons/>
       <Foodlist/>
       <Foodlist2/>
       <FoodPicture2/>
       <Footer/>

    </>
  )
}

export default Food