import React from 'react';
import Navbar from '../../../Shared/Navbar';
import HeaderDashBoard from './HeaderDashBoard';
import './Meter2.css'
const DashboardMain = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Navbar/>
            </div>
            <div className="col-md-10">
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