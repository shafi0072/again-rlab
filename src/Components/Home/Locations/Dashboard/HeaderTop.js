import React from 'react';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import './Meter2.css'
const HeaderTop = () => {
    return (
        <div className="pt-5">
            <div className="d-flex align-items-center bg-customs pt-3 ps-3">
                <h2>Dashboard <DashboardOutlinedIcon/></h2>
                
                <ul className="listStyle">
                    <li className="HeaderToplist">Locations /</li>
                    <li className="HeaderToplist">Solarpan01</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderTop;