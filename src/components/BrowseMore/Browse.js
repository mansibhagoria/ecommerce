import React from 'react'
import "./Browse.css"

function Browse() {
  return (
    <div>
      <h1 className='head'>Browse More</h1>
      <div classname='main-div'>

          <img src="./background-image.png" alt="image" classname='image' />

          <div className='text'>
          <h1>Sign Up for the<br/>Latest Teatotaller News &<br/>Offers!</h1>
          </div>

          <div className='buttons'>
            <div>
            <input type='text' placeholder='Email address' className='email'></input>
            </div>

            <div >
            <input type='submit' value='JOIN US' className='signup'></input>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default Browse