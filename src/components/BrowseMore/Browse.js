import React from 'react'
import "./Browse.css"

function Browse() {
  return (
    <div>
      <h1 className='head'>Browse More</h1>
      <div >
        <img src="./background-image.png" alt="image" className='image'/>
      </div>
      <div className='text'>
        <h1>Sign Up for the<br/>Latest Teatotaller News &<br/>Offers!</h1>
      </div>
      <div className='email'>
        <div className='email'>
        <input type='text' placeholder='Email address'></input>
        </div>

        <div className='signup'>
        <input type='submit' value='JOIN US'></input>
        </div>
      </div>
    </div>
  )
}

export default Browse
