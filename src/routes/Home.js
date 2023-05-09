import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Destination from '../components/Destination';
import Trip from '../components/Trip';
import Footer from '../components/Footer';
import SignUp from './SignUp';

function Home(){

    return(
        <>
         <Navbar />
         <Hero 
            cName = "hero"
            heroImg = "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title = "Your Journey Your Strory"
            text = "Choose Your Favorite Destination."
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "Show"
        />
        <Destination />

        <Trip />
        < SignUp />

        <Footer />
        </>
    );
}

export default Home;

// 1:14:06