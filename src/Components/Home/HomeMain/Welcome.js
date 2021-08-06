import React from 'react';
import template from '../../../Resorces/welcome.jpg';
import './Home.css';

const Welcome = () => {
    return (
        <div>
            <section className="welcome-section text-center pt-4">
                <div className="welcome-container">
                    <h1 className="homePage-title">Welcome to the RLAB</h1>
                    <h3 className="full-name">Ulises Ramos Lab</h3>
                    <p className="homePage-p">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    </div>
                    <div className="welcome-img mt-5">
                        <img className="welcome-animation" src={template} alt="" />
                    </div>
                
                
            </section>
            
        </div>
    );
};

export default Welcome;