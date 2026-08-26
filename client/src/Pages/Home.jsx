import React from 'react'
import Header from '../Components/Header.jsx'
import Steps from '../Components/Steps.jsx'
import Description from '../Components/Description.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import GenerateButton from '../Components/GenerateButton.jsx'
import Footer from '../Components/Footer.jsx'

const Home = () => {
  return (
    <div>
     <Header/>
     <Steps/>
     <Description/>
     <Testimonials/>
     <GenerateButton/>
    </div>
  )
}

export default Home
