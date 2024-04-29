import React from 'react';
import './Landing.css';
import Navbar from '../Navbar/Navbar';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="text-container">
        <h2>DISCOVER NATURE'S FINEST<br/> FLAVORS: LEAVES, HERBS,<br/> SPICES, AND TEAS AWAIT.<br/></h2>
        <h4>Embark on a flavorful journey with our exquisite selection of leaves,<br/> herbs, spices, and teas - where nature's essence meets your cup.</h4>
        <div className="shopnow-button">
          <button>Shop Now</button>
        </div>
      </div>
      <div className="image-container">
        <img src="./homepagephoto.png" alt="homepagephoto" className='image'/>
      </div>
    </div>
  )
}

export default Landing;
