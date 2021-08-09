import React from 'react';
import './Home.css';

const Information = () => {
    return (
        <div>
            <div className="information-section py-5">
                <div className="information-container py-3">
                    <h1 className="homePage-title text-center">Information Our Tecnology</h1>
                    <p className="homePage-p text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="details-container row py-2">
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>PCB Design</h1>
                                <p>From assembly development to mitigating crosstalk to signal integrity, these tips can help streamline the high-speed PCB design process.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>IOT Device</h1>
                                <p>A global-scale malvertising attack aimed specifically at home-network based IoT devices has been uncovered by global cybersecurity firm GeoEdge.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>Micro Controller</h1>
                                <p>STMicroelectronics has certified its general purpose STM32U585 ARM Cortex-M33 microcontroller for PSA Certified Level-3 and SESIP security.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="details-container row py-2">
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>Modern Design</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi assumenda quis laudantium amet velit saepe ad corporis animi. Eaque, tempora.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>Modern Design</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi assumenda quis laudantium amet velit saepe ad corporis animi. Eaque, tempora.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="detail">
                                <h1>Modern Design</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi assumenda quis laudantium amet velit saepe ad corporis animi. Eaque, tempora.</p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Information;