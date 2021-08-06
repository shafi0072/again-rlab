
import React from 'react';
import Navbar from '../../Shared/Navbar';
import Devices from './Devices';
import './Devices.css';
import logo from '../../../Resorces/logo_RLAB.png';

const MainDevices = () => {
    return (
        <div className='row'>
        
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11 ">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5 mb-5' />
            </div>
                <Devices/>
            </div>
        </div>
    );
};

export default MainDevices;