import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Carusel from '../../Carusel/Carusel';
import Card from '../../Card/Card';
import Footer from '../../Footer/Footer';
import Welcome from './Welcome';
import Information from './Information';
import Service from './Service';
import Rating from './Rating.js';
import Client from './Client';
import Contact from './Contact';
import './Home.css';
import './HomeResponsive.css';
const Home = () => {
    return (
        <div>
            <Navbar className="main-navbar"/>
            <Carusel className= "main-carusel"/>
            <div className='cardBG'>
            <Welcome/>
            <Information/>
            <Service/>
            <Rating/>
            {/* <Client/> */}
            <Contact/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;