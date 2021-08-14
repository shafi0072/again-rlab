import React from 'react';
import Navbar from '../../../Shared/Navbar';
import HeaderDashBoard from './HeaderDashBoard';
import './Meter2.css'
const DashboardMain = () => {
    return (
        <div className="row">
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11">
                <div className="bodyBackground">
                    <div className="">
                        <HeaderDashBoard/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default DashboardMain;