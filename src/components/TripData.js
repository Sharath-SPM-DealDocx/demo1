import React from 'react';
import './Trip.css';
// import TripImg1 from '../assets/'

function TripData(props) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img alt="no img found" src = {props.image}/>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default TripData;