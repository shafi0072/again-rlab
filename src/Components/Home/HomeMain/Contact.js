import React, { useState } from 'react';
import { useEffect } from 'react';
import './Home.css'


    

const Contact = () => {
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
        if(e.target.name === 'email'){
            setLength(true)
        }
        
    }
    const [length, setLength] = useState(false)
    
    useEffect(() => {
        if(input.firstName > 0){
            setLength(true)
        }
    },[input.firstName])
    
    return (
        <div>
            <div className="contact-section py-5">
                <div className="contact-container">
                    <h1 className="text-center homePage-title">Contact Us</h1>
                    <p className="homePage-p text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <div>
                                <h1 className="">RLAB</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore dicta eligendi corporis repudiandae tenetur quia sapiente laudantium minima repellendus assumenda laboriosam porro veniam esse hic, illum possimus quas nobis?</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                            <div>
                                <h1 className='text-center'>Email Us</h1>
                                <form className="form-section" action='https://formspree.io/f/xbjqygpq' method="POST">
                                    <h4 htmlFor="firstName" className="form-title">First Name</h4><br/>
                                    <input onChange={handleChange} className="footer-input" type="text" name='firstName' placeholder="First Name" id="firstName"/>
                                    <br/>
                                    <h4 htmlFor="lastName" className="form-title">Last Name</h4><br />
                                    <input className="footer-input" type="text" name="lastName" placeholder="Last Name" id="lastName" style={{ borderRadius:'5px', height:'40px', padding:'10px'}} onChange={handleChange}/><br/>
                                    <h4 htmlFor="email" className="form-title">Email Adress</h4><br />
                                    <input className="footer-input" type="email" name="email" placeholder="Email Adress" id="email" style={{borderRadius:'5px', height:'40px', padding:'10px' }} onChange={handleChange}/><br />
                                    <h4 htmlFor="message" className="form-title">Message</h4><br />
                                    <textarea className="footer-textarea mb-2" name="message" id="message" cols="45" rows="1" placeholder="Write Something" style={{resize:'vartical', width:'100%', borderRadius:"5px", padding:'10px'}} onChange={handleChange}></textarea>
                                    <br />
                                    {length && <button className="btn btn-primary footer-button" type="submit">Submit</button>}
                                    {!length && <button className="btn btn-dark footer-button">Submit</button>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;