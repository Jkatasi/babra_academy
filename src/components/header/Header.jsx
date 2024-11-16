import React from 'react'
import './header.css'
import Carousel from '../carousel/Carousel'


const Header = () => {
  return (
    <div className='babra__header section__padding' id='home' >
        <div className='babra__header-content'>
          <h1>    Welcome to Babra Junior Academy, where education meets creativity and every child’s potential is nurtured.</h1>
          <div className='babra__header-content_carousel'>
            <Carousel />

          </div>

        </div>
     
    </div>
    
  )
}

export default Header