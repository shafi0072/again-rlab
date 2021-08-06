import React, { useState } from 'react';
import './Footer.css'

const Footer = () => {
    const [input, setInput] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });
    const handleChange = (e) => {
        const newForm = {...input};
        newForm[e.target.name] = e.target.value;
        
        setInput(newForm)
    }
    
    return (
        <div>
            <div className="footer-section ">
                <div className="footer-container pt-5 pb-4">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="left-section">
                                <h2 className="text-center">This is RLAB</h2>
                                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eum nobis neque ipsum, qui dolor.</p>
                                <div className="footer-btn text-center">
                                    <button className="btn f-button">Parches Here</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-2 footer-list-container">
                                    <h5 className="footer-list-title">Discover</h5>
                                    <ul className="footer-lists">
                                        <li className="footer-list"><label htmlFor="">Discover1</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover2</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover3</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover4</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover5</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover6</label></li>
                                    </ul>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2 footer-list-container">
                                    <h5 className="footer-list-title color2">Discover</h5>
                                    <ul className="footer-lists">
                                        <li className="footer-list"><label htmlFor="">Discover1</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover2</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover3</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover4</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover5</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover6</label></li>
                                    </ul>
                                </div>
                                <div className="col-md-2"></div>
                                <div className="col-md-2 footer-list-container">
                                    <h5 className="footer-list-title color3">Discover</h5>
                                    <ul className="footer-lists">
                                        <li className="footer-list"><label htmlFor="">Discover1</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover2</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover3</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover4</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover5</label></li>
                                        <li className="footer-list"><label htmlFor="">Discover6</label></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="copyright-footer text-center py-3">
                    <p>© 2019 POLO - Responsive Multi-Purpose HTML5 Template. All Rights Reserved. INSPIRO</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;