import React from 'react'
import './Campus.css'

import campusPhoto1 from '../../assets/campus1.jpg'
import campusPhoto2 from '../../assets/campus2.jpg'
import campusPhoto3 from '../../assets/campus3.jpg'
import campusPhoto4 from '../../assets/campus4.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campusPhoto1} alt="Classroom 1" />
            <img src={campusPhoto2} alt="Library" />
            <img src={campusPhoto3} alt="Outdoors" />
            <img src={campusPhoto4} alt="Classroom 2" />
        </div>
        <button className='btn dark-btn'>See more</button>
    </div>
  )
}

export default Campus
