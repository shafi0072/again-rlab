import React from 'react';
import './Home.css';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DevicesIcon from '@material-ui/icons/Devices';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';

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
                                    <div><DeveloperBoardIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">PCB Provider</h2>
                                    <p>PCB Solutions is a printed circuit board manufacturer providing printed circuit boards, assemblies, connectivity solutions and enclosures for the dynamic electronics industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><DevicesIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">IOT Provider</h2>
                                    <p>Research predicts major uptick in enterprise IT spending, spurred by edge, 5G and private network investments, representing significant opportunity for communications service providers in 2022 and beyond</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item d-flex">
                                <div className="icon">
                                    <div><ControlCameraIcon id="service-icon"/></div>
                                </div>
                                <div className="item-detail">
                                    <h2 className="detail-head">Micro Provider</h2>
                                    <p>Ingram Micro Commerce & Lifecycle Services provides global supply chain solutions that connect supply and demand. From cross-border fulfillment to dropship and returns management, IT asset disposition, re-marketing, distribution and more, our solutions drive growth across the commerce and technology markets.</p>
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