import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaBell, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav>

        <ul>
          <h1>Teatotaller</h1>
          <div className='links'>
          <li>
            {/* <NavLink to="/" exact activeClassName="active">Home</NavLink> */}
            Home
          </li>
          <li>
            Categories
            {/* <NavLink to="/categories" activeClassName="active">Categories</NavLink> */}
          </li>
          <li>
            About
            {/* <NavLink to="/about" activeClassName="active">About</NavLink> */}
          </li>
          <li>
            Signup
            {/* <NavLink to="/signup" activeClassName="active">Signup</NavLink> */}
          </li>
          </div>
        </ul>
      </nav>
      <div className="search-icons">
        <input type="text" placeholder="What are you looking for?" className='input'  />   
        <FaSearch className="search-icon" />
        
      </div>
      <div className="icons">
      <FaHeart className="heart-icon" />
      <FaShoppingCart className="cart-icon" />
    </div>
    </div>
    
  )
}

export default Navbar;
