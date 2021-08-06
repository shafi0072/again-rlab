import React from 'react';
import './Location.css';
import logo from '../../../Resorces/logo_RLAB.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

import Aos from "aos";
import 'aos/dist/aos.css';
import MeaSpinner from './MetarialSpinner'

const DevicesForm = (props) => {

 const {Device_id_1, Device_id_2, Device_id_3} = props.data;  


    

   
 


useEffect(() => {
    Aos.init({duration: 2000});
}, []);

    
    return (
            
            <div>
                <div className="logo-img">
                    <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                </div>
               <div className="container device-form-container mt-5">
                
              {Device_id_1 && <div data-aos="fade-left"  className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name">{!Device_id_1 && <span><MeaSpinner/></span>}<p className="">{Device_id_1}</p></div>
                    <div title="Edit" className="meta_icon">
                    <EditIcon />
                    </div>
                    <Link title="select" to={`/locationsDevice/${Device_id_1}`}  className="meta_icon2"><ArrowForwardIcon/></Link>
                </div>}
                {Device_id_2 && <div data-aos="fade-right"  className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name">{!Device_id_1 && <span><MeaSpinner/></span>}<p className="form-name-p">{Device_id_2}</p></div>
                     
                    <div title="Edit" className="meta_icon">
                    <EditIcon />
                    </div>
                    <Link title="select" to={`/locationsDevice/${Device_id_2}`}   className="meta_icon2"><ArrowForwardIcon/></Link>
                </div>}
                {Device_id_3 && <div data-aos="fade-left"  className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name">{!Device_id_1 && <span><MeaSpinner/></span>}<p className="form-name-p">{Device_id_3}</p></div>
                     
                    <div title="Edit" className="meta_icon">
                    <EditIcon />
                    </div>
                    <Link title="select" to={`/locationsDevice/${Device_id_3}`}  className="meta_icon2"><ArrowForwardIcon/></Link>
                </div>}
                <div data-aos="fade-right" className="d-flex justify-content-end buttonArea">
                    <button className="btn btn-dark AddBUtton">Edit Location</button>
                </div>
                </div>
            </div>
        
    );
}

export default DevicesForm;