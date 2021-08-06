import React from 'react';
import './Carusel.css'
const Carusel = () => {
    return (
        <div>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active frstSlider text-center animation">
                        <h1 className='text-light slide-head' style={{marginTop:'10%'}}>RLAB</h1>
                        <h2 className='text-light'>Your First choice</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                    <div className="carousel-item secondSlider text-center animation">
                        <h1 className='text-light slide-head' style={{marginTop:'10%'}}>Electric Devices</h1>
                        <h2 className='text-light'>Your choice</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                    <div className="carousel-item thirdSlider text-center animation">
                    <h1 className='text-light slide-head' style={{marginTop:'10%'}}>IOT Devices</h1>
                        <h2 className='text-light'>Your IOT</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carusel;