import React from 'react';
import './header.css';
import { Carousel } from '..';

const Header = () => {
  return (
    <div className="babra__header section__padding" id="home">
      <div className="babra__header-content">
        <h1>Welcome to Babra Junior Academy</h1>
        <p>
        "Welcome to Babra Junior Academy, where young minds are nurtured to shine brighter than the stars! Our mission is to ignite curiosity, inspire creativity, and cultivate lifelong learners in a safe, dynamic, and inclusive environment. At Babra Junior Academy, every child is seen as a unique gem, polished with knowledge, values, and skills to thrive in an ever-changing world. Join us on this incredible journey of discovery, growth, and excellence as we shape tomorrow's leaders today."
        </p>
        <div className="babra__header-content__input">
          <button type="button">Our History</button>
        </div>
      </div>
      <div className="babra__header-image">
       <Carousel />
      </div>
    </div>
  );
};

export default Header;
