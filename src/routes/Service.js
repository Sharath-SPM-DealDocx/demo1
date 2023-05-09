import React from 'react'
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ServiceImg from '../assets/images/5.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service() {
  return (
    <>
    <Navbar />
           <Hero 
              cName = ".hero-mid"
              heroImg = {ServiceImg}
              title = "About"
              btnClass = "hide"
          />
          <Trip />
          <Footer />
      </>
  )
}

export default Service