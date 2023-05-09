import React from 'react';
import './Trip.css';
import Trip1 from '../assets/images/5.jpg';
import Trip2 from '../assets/images/8.jpg';
import Trip3 from '../assets/images/6.jpg';
import TripData from './TripData';

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}
                    heading="Trip To Indonesia"
                    text="Indonesia Indonesia IndonesiaIndonesiaIndonesia  IndonesiaIndonesiaIndonesia
                IndonesiaIndonesiaIndonesiaIndonesiaIndonesia."
                />

                <TripData
                    image={Trip2}
                    heading="Trip To Spain"
                    text="Spain Spain SpainSpainSpainSpainSpainSpainSpainSpainSpainSpainSpainSpainSpainSpai
                SpainSpainSpainSpainSpainSpainSpainSpainSpainSpain."
                />

                <TripData
                    image={Trip3}
                    heading="Trip To Japan"
                    text="Japan JapanJapanJapanJapanJapanJapanJapanJapanJapanJapanJapanJapanJapanJapan
                JapanJapanJapanJapanJapanJapanJapanJapanJapanJapan."
                />
            </div>
        </div>
    );
}

export default Trip;