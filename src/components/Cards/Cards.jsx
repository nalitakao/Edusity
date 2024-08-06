import React from 'react'
import './Cards.css'

import user from '../../assets/profile.png'

const Cards = () => {
  return (
    <div className="slide">
        <div className='student-info'>
            <img src={user} alt="Student icon" />
            <div>
                <h3>William Jackson</h3>
                <span>Edusity, USA</span>
            </div>
        </div>
        <div className="student-review">
            <p>Choosing to purse my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities and commintment to academic excellence have truly exceeded my expectations.</p>
        </div>
    </div>
  )
}

export default Cards
