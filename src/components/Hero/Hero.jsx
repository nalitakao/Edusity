import React from 'react'
import './Hero.css'
import arrowRight from '../../assets/arrow-right.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure a better education for a better world!</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knoledge, skills and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore <img src={arrowRight} alt='Arrow pointing to right' /></button>
        </div>
      
    </div>
  )
}

export default Hero
