import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#academics">Academics</a></p>
  <p><a href="#admissions">Admissions</a></p>
  <p><a href="#contact">Contact</a></p>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='babra__navbar'>
      <div className='babra__navbar-links'>
        <div className='babra__navbar-links_logo'>
      <img src= {logo} alt="logo" />
        <h1>Babra Academy</h1>
        </div>
        <div className='babra__navbar-links_logo'>
  
  
 
</div>

        <div className='babra__navbar-links_container'>
        <Menu />
        
        {/* Call to Action (CTA) */}
        <div className="cta-buttons">
          <button className="cta-btn">Student Portal</button>
          <button className="cta-btn">Apply Now</button>
        </div>
        </div>
         {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        </div>
       
        <div className='babra__navbar-menu'>
          {toggleMenu
          ?<RiCloseLine color= "#fff" size= {27} onClick ={()=> setToggleMenu(false)} />
          : <RiMenu3Line color= "#fff" size= {27} onClick ={()=> setToggleMenu(true)} />
          
          }
          {toggleMenu && (
            <div className={`babra__navbar-menu_container ${toggleMenu ? 'active' : ''} scale-up-center`}>
              <div className='babra__navbar-menu_container-links'>
              <Menu />
              
        {/* Call to Action (CTA) */}
        <div className="cta-buttons">
          <button className="cta-btn">Student Portal</button>
          <button className="cta-btn">Apply Now</button>
        </div>
          
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  )
}

export default Navbar