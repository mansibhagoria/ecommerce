import React, { useRef } from 'react';
import './Customers.css';

function Customers() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust this value to change the scroll distance
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust this value to change the scroll distance
      behavior: 'smooth'
    });
  };

  return (
    <div className="customers-container">
        
      <h1>Our Happy Customers</h1>
      <div className='button-cont'>
      <button className="scroll-btn left" onClick={scrollLeft}>
        &lt;
      </button>
      <button className="scroll-btn right" onClick={scrollRight}>
        &gt;
      </button>
      </div>
      <div className="reviews-container" ref={containerRef}>
        <div className="review">
          <h3>Sarah M.</h3>
          <p>"I'm blown away by the quality and style of the<br/> clothes I received from Teatotaller. From casual <br/>wear to elegant dresses, every piece I've bought<br/> has exceeded my expectations.”</p>
        </div>
        <div className="review">
          <h3>Alex K.</h3>
          <p>"Finding clothes that align with my personal <br/>style used to be a challenge until I discovered<br/> Teatotaller. The range of options they offer is<br/> truly remarkable, catering to a variety of tastes <br/>and occasions.”</p>
        </div>
        <div className="review">
          <h3>James L.</h3>
          <p>"As someone who's always on the lookout for <br/>unique fashion pieces, I'm thrilled to have<br/> stumbled upon Teatotaller. The selection of <br/>clothes is not only diverse but also on-point<br/> with the latest trends.”
</p>
        </div>
        <div className="review">
          <p>Review 4</p>
        </div>
        <div className="review">
          <p>Review 5</p>
        </div>
        {/* Add more reviews as needed */}
      </div>
    
    </div>
  );
}

export default Customers;
