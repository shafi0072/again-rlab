import React from 'react';
import './Home.css';
import AccessibleIcon from '@material-ui/icons/Accessible';

const Service = () => {
    return (
        <div>
            <div className="service-section py-5">
                <div className="service-container">
                <h1 className="homePage-title text-center">Our Services</h1>
                <p className="homePage-p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="service-detail">
                    <div className="row py-4">
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row py-4">
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2>Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2>Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><AccessibleIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2>Powerful template</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, odio quis quaerat fuga accusamus quidem.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;