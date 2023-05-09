import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ConatctImg from '../assets/images/2.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <>
    <Navbar />
           <Hero 
              cName = ".hero-mid"
              heroImg = {ConatctImg}
              title = "Contact"
              btnClass = "hide"
          />
          <ContactForm />
          <Footer />
      </>
  )
}

export default Contact