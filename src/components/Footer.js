import React from 'react';
import './FooterStyles.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div>
                <h1>Trippy</h1>
                <p>Choose Your Favourite Destination.</p>
            </div>
            <div>
                <a href = "/">
                    <i className='fa-brands fa-facebook-sqarei'></i>
                </a>
                <a href = "/">
                    <i className='fa-brands fa-instagram-sqarei'></i>
                </a>
                <a href = "/">
                    <i className='fa-brands fa-behance-sqarei'></i>
                </a>
                <a href = "/">
                    <i className='fa-brands fa-twitter-sqarei'></i>
                </a>
            </div>
        </div>
        <div className='bottom'>
            <div className=''>
                <h4>Project</h4>
                <a href='/'>Changelog</a>
                <a href='/'>Status</a>
                <a href='/'>license</a>
                <a href='/'>All Versions</a>
            </div>
            <div className=''>
                <h4>Community</h4>
                <a href='/'>GitHub</a>
                <a href='/'>Issues</a>
                <a href='/'>Project</a>
                <a href='/'>Twitter</a>
            </div>
            <div className=''>
                <h4>Help</h4>
                <a href='/'>Support</a>
                <a href='/'>Troubleshooting</a>
                <a href='/'>Contact Us</a>
            </div>
            <div className=''>
                <h4>Others</h4>
                <a href='/'>Terms Of Service</a>
                <a href='/'>Privacy Policy</a>
                <a href='/'>License</a>
            </div>
        </div>
    </div>
  );
}

export default Footer