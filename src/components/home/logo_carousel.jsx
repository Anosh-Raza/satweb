import React from 'react'
import Feature from './heading'
import {logos} from '../../data'

const logo_carousel = () => {
  return (
    <>
    <div className='logo_carousel bg-logo-purple relative py-12'>
    <Feature
        title="CLIENT ACROSS INDUSTRIES"
        heading="Full-Service Web Design Agency"
        description="Bespoke designs tailored to your brand."
        highlightedText="we create custom solutions that grow brands online"
        bgClass=""
        textColor="text-white"
      />
      <div className="marquee-container px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="marquee">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default logo_carousel