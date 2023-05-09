import React from 'react';
import '../components/HeroStyles.css';
import jeep from '../assets/images/jeep.jpg';

function Hero(props) {
  return (
    <>
        <div className={props.cName}>
            <img alt="Hero-Image" src = {props.heroImg} />
            
            <div className='hero-text'>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
            </div>
        </div>
    </>
  )
}

export default Hero;