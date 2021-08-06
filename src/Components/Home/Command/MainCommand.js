import React from 'react';
import logo from '../../../Resorces/logo_RLAB.png';
import Navbar from '../../Shared/Navbar';
import Command from './Command';
import './Command.css';


const MainCommand = () => {
    return (
        <div className="row">
        
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            </div>
                <Command/>
            </div>
        </div>
    );
};

export default MainCommand;