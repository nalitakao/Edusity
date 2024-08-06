import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message!</h3>
        <p>Feel free to reach out through contact form of find our contact information below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li>contact@meee.com</li>
            <li>(123)123-1234</li>
            <li>424-434 5th Ave NY 10018</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
            <label htmlFor="">First and Last Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />

            <label htmlFor="">Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />

            <label htmlFor="">Write your message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit</button>
        </form>
        <span></span>
      </div>
    </div>
  )
}

export default Contact
