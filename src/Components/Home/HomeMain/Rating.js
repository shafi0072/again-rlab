import React from 'react';
import './Home.css'
import AccessibleIcon from '@material-ui/icons/Accessible';

const Rating = () => {
    return (
        <div>
            <div className="rating-section">
                <div className="row text-center">
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><AccessibleIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Lorem, ipsum dolor.</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><AccessibleIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Lorem, ipsum dolor.</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><AccessibleIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Lorem, ipsum dolor.</p>
                    </div>
                    <div className="col-md-3 rating-container">
                        <div className="r-icon"><AccessibleIcon id="rating-icon"/></div>
                        <h1 className="rating-number">222</h1>
                        <p className="rating-line">Lorem, ipsum dolor.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rating;