import React from 'react';
import {Home, About, Academics, Admissions, Alumini, Calender, Gallery, News, Contact} from './containers';
import {Card, Carousel, Footer, Hero, Navbar, Sidebar, Header } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <About />
        <Academics />
        <Admissions />
        <News />
        <Gallery />
        <Calender />
        <Alumini />
        <Footer />
      </div>
    </div>
  )
}

export default App