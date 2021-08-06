import React from 'react';
import './Card.css'
const Card = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-4 mb-5">
                    <div className='text-center text-dark boxShadow'>
                        <img src="https://www.bluetooth.com/wp-content/uploads/2019/04/Bluetooth_FM_Color.png" style={{width:'30%', height:'130px'}} className='image-fluid' alt="" />
                        <h3>Bluetooth</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus molestiae eius magnam nemo architecto? Numquam ipsa dolore animi dicta laudantium?</p>
                        <h1>$120</h1>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className='text-center text-dark boxShadow'>
                        <img src="https://www.futronic-tech.com/attachment/2019-12/1576838921rm5pE.jpg" style={{width:'30%', height:'130px'}} className='image-fluid' alt="" />
                        <h3>Fringer Print</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus molestiae eius magnam nemo architecto? Numquam ipsa dolore animi dicta laudantium?</p>
                        <h1>$120</h1>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className='text-center text-dark boxShadow'>
                        <img src="https://www.vexrobotics.com/media/catalog/product/cache/d64bdfbef0647162ce6500508a887a85/e/3/e33a0274.jpg" style={{width:'30%', height:'130px'}} className='image-fluid' alt="" />
                        <h3>Eye sensor</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus molestiae eius magnam nemo architecto? Numquam ipsa dolore animi dicta laudantium?</p>
                        <h1>$120</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;