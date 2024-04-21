import React from 'react'

import Hero from './Hero'
import AboutUs from './About'
import VideoSection from './VideoSection'
import DonationSection from './DonationSection'
import HungryChildrenGallery from './HungryChildrenGallery'
import DonationList from './DonationList'
import ContactForm from './ContactForm'
import FeaturedCauses from './FeaturedCauses'
import VolunteerSection from './VolunteerSection'

const Main = () => {
  return (
    <div>
        
      
     <Hero/>
     <AboutUs/>
     <VideoSection/>
     <DonationSection/>
     <FeaturedCauses/>
     <VolunteerSection/>
     <HungryChildrenGallery/>
     <DonationList/>
    
     <ContactForm/>
    
    </div>
  )
}

export default Main