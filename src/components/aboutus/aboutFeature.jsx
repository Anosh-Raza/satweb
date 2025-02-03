import React from 'react'
import propTypes from 'prop-types'

const AboutFeature = ({
    subheading,
    content1,
    content2,
    mainHeading,
}) => {
    subheading = subheading || "Got Talent?";
    content1 = content1 || "Join Our Team";
    content2 = content2 || "Join Our Team";
    mainHeading = mainHeading || "We're Hiring!";
  return (
    <section className="aboutFeature bg-theme-white container mx-auto px-5 text-center text-theme-white py-10">
        <h3 className='text-logo-purple'>{subheading}</h3>
        <p className='text-logo-purple'>{content1}</p>
        <p className='text-logo-purple'>{content2}</p>
        <h2 className='text-logo-purple'>{mainHeading}</h2>
    </section>
  )
};

AboutFeature.propTypes = {
    subheading: propTypes.string,
    content1: propTypes.string,
    content2: propTypes.string,
    mainHeading: propTypes.string,
};

export default AboutFeature