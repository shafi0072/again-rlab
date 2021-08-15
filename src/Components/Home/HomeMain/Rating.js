import React from 'react';
import './Home.css'
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DevicesIcon from '@material-ui/icons/Devices';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

const Rating = () => {
    return (
        <div>
            <div className="rating-section">
                <div className="row text-center">
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><DeveloperBoardIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">PCB Design</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><DevicesIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">IOT Device</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><ControlCameraIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Micro Controller</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><SettingsBrightnessIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Solar Panel</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;