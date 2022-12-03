import React from 'react'
import Buttons from '../buttons/Buttons'
import Description from '../description/Description'
import Holiday from '../holiday/Holiday'
import Section from './section/Section'
import Footer from '../footer/Footer'

const Home = () => {
  return (
    <>
    <Section/>
    <Holiday/>
    <div className='mt-10'></div>
    <Buttons/>
    <Description/>
    <Footer/>
    </>
    )
  }
export default Home