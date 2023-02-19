import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/hero-image/HeroImage'
import Navbar from '../components/Navbar'
import Form from '../components/form/Form'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="Contact" text="Contact Space X" />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact