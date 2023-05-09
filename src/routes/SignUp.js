import './SignUpStyles.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SignUp() {
  return (
    
    <div>
        <Navbar />
  
        <div className='regForm'>
            <form className='regpostForm'>
                <label>UserName:</label>
                <input  type='text' name='userName' placeholder='Enter Your Name' required/>
                <label>UserEmail</label>
                <input  type='email' name='userEmiail' placeholder='Enter Your Email Address' required/>
                <label>Password</label>
                <input type='password' name='password' placeholder='Enter Your Password' required />
                <label>Contact Info</label>
                <input type='number' name='phNumber' placeholder='Enter Your Contact Number' required />
                <br/>
                <button className='sendbtn'>Submit</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default SignUp;