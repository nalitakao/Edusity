import React, { useRef } from 'react'
import './Testimonials.css'

import btnNext from '../../assets/play-btn.png'
import btnPrev from '../../assets/arrow-left-btn.png'
import Cards from '../Cards/Cards'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50) {
            tx -= 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 50;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img src={btnNext} alt="Button to select next item in carousel" className='btn-next' onClick={slideForward} />
      <img src={btnPrev} alt="Button to select previous item in carousel" className='btn-prev' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <Cards />
            </li>
            <li>
                <Cards />
            </li>
            <li>
                <Cards />
            </li>
            <li>
                <Cards />
            </li>
            <li>
                <Cards />
            </li>
            <li>
                <Cards />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
