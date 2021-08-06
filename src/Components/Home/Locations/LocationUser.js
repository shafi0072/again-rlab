import React from 'react';


import './LocationStyle.css';
import '../../../responsive.css';
import {Link} from 'react-router-dom'

const LocationUser = (props) => {
    
    const {LocationID, addDevices, key} = props.data
    return (
        <div className="energy-meter-card-container col-md-4 text-center">
            
            <div className="card-main-container mb-1 me-2">
                <Link className="location-user-text" to={`/locations/${key}`}><div className="mb-3">
                    <div className="card card-container" >
                        
                        <div className="card-body">
                        <h6 className="card-text-h6 mb-2">{addDevices}</h6>
                        <p className="card-text-p mb-1">{LocationID}</p>
                        </div>
                    </div>
                    </div>
                </Link>
                        
                    
                        
            </div>
        </div>
        
    );
};

export default LocationUser;