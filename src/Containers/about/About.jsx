import React from 'react';
import './about.css';
import { Feature } from '../../components';


const About = () => {
  return (
    <div className='babra__about section__padding' id='about'>
      <div className='babra__about-feature'>
        <Feature title="About Us" text="'At Babra Junior Academy, we believe in the transformative power of education. Established to provide a strong foundation for young learners, our school combines modern teaching methods with a nurturing environment to unlock every child's potential. From our dedicated teachers and well-equipped facilities to our diverse extracurricular programs, we are committed to delivering a holistic education experience. Discover how we foster creativity, instill discipline, and encourage curiosity, shaping tomorrow’s leaders today. Learn more about our journey, our values, and the vibrant community that makes us truly exceptional.'" />

      </div>
      <div className='babra__about-heading'>
       
      </div>
      <div className='babra__about-container'>
        <Feature  title=  "Our Mission" text="'To empower every student with knowledge, skills, and values, fostering a love for learning and inspiring them to excel academically, socially, and emotionally in a supportive and inclusive environment.'" />
        <Feature title="Our Vision" text= "'To be a leading center of excellence in education, shaping responsible, innovative, and compassionate leaders who will make a positive impact on the world.'"/>
        <Feature title= "Our Motto" text="'Inspiring Young Minds, Shaping Bright Futures.'"/>
      </div>
    </div>
  )
}

export default About