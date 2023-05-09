import React from 'react';
import Mountain1 from '../assets/images/1.jpg';
import Mountain2 from '../assets/images/2.jpg';
import Mountain3 from '../assets/images/3.jpg';
import Mountain4 from '../assets/images/4.jpg';
import './DestinationStyles.css';
import DestinatioData from './DestinatioData';

const Destination = () =>{
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you opportunity to see a lot, within a time frame.</p>

            <DestinatioData className ="first-des"
                heading = "Taal Volcano, Batangas"

                text = "I Love To Travel The World In the Bike I Like To Ride Solo For The Whole Life Happy ForEver"
                image1 = {Mountain1}
                image2 = {Mountain2}

            />

<DestinatioData className = "first-des-reverse"
                heading = "Mt. Daguldul, Batangas"

                text = "I Love To Travel The World In the Bike I Like To Ride Solo For The Whole Life Happy ForEver"

                image1 = {Mountain3}
                image2 = {Mountain4}

            />
            
        </div>
    );
}

export default Destination;