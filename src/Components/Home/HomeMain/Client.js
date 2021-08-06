import React from 'react';
import './Home.css';
import Logo1 from '../../../Resorces/2.png'

const Client = () => {
    return (
        <div>
            <div className="client-section pt-5">
                <h1 className="homePage-title text-center">CLIENTS</h1>
                <p className="homePage-p text-center">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <div className="clients-logo row py-3">
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                    <div className="col-md-2"><img src={Logo1} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Client;