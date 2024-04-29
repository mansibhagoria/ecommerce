import React from 'react';
import './NewArrivals.css';

function NewArrivals() {
  return (
    <div>
      <div>
        <h1 className='arrivals'>New Arrivals</h1>
      </div>

      <div className='background'>
     
        <div className='image-container1'>
          <img src="./turmeric.png" alt="turmeric"></img>
          <div className="text-overlay">Turmeric</div>
        </div>

        <div className='image-container2'>
          <img src="./mulethi.png" alt="mulethi"></img>
          <div className="text-overlay">Mulethi</div>
        </div>

        <div className='image-container3'>
          <img src="./kesar.png" alt="kesar"></img>
          <div className="text-overlay">Kesar</div>
        </div>

      </div>
      
    </div>
  )
}

export default NewArrivals;
