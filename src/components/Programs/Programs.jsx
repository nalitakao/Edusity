import React from 'react'
import './Programs.css'
import { Title } from '../Title/Title'

import program1 from '../../assets/programs1.jpg'
import program2 from '../../assets/programs2.jpg'
import program3 from '../../assets/programs3.jpg'

import programGraduationIcon from '../../assets/Graduation.png'
import programMastersIcon from '../../assets/Masters.png'
import programPostGradIcon from '../../assets/Post-grad.png'

const Programs = () => {
  return (
    <>
    <Title subtitle='Our Programs' title='What We Offer' />
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <img src={programGraduationIcon} alt='' />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <img src={programMastersIcon} alt='' />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <img src={programPostGradIcon} alt='' />
                <p>Post Degree</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Programs
