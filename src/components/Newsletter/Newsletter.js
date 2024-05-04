import React from 'react'
import './Newsletter.css'
import { CiMail } from "react-icons/ci";
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className='textBox'>
          Stay upto date about our latest offers
        </div> 

        <div className="subscribeBox">
          <CiMail className='emailIcon' />
          <input type="email" placeholder='Enter your email' className='email' id='email' name='email'/>
          <button className='subscribe'>Subscribe to Newsletter</button>
        </div>

    </div>
  )
}

export default Newsletter