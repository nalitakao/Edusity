import React from 'react'
import './About.css'
import UniversityImg from '../../assets/About-Uni.jpg'
import play from '../../assets/play-btn.png'
import { ProgramsAbout } from '../Title/Title'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={UniversityImg} alt='University campus photo' className='about-img' />
            <img src={play} alt='play icon button' className='play-icon' />
        </div>
        <div className="about-right">
            <ProgramsAbout subtitle="About University" title="Nurturing Tomorrow's Leaders Today" />
            <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor or educational leader, our diverse range of programs offers the perfect pathway to achive your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default About
