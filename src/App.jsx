import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import { Title } from './components/Title/Title'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos' />
      </div>
      <Campus />
      <Title subtitle='Testimonials' title='Said By Our Students' />
      <Testimonials />
      <Title subtitle='Contact Us' title='Get In Touch' />
      <Contact />
    </div>
  )
}

export default App