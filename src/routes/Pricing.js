import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/hero-image/HeroImage'
import Navbar from '../components/Navbar'
import PricingCards from '../components/pricing/Pricing'

const Pricing = () => {
  return (
    <div>
        <Navbar />
        <HeroImage heading="PRICING" text="Choose your trip" />
        <PricingCards />
        <Footer />
    </div>
  )
}

export default Pricing