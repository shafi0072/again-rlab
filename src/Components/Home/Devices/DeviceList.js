import React from 'react';
import {Link} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import MetarialSpinner from '../Locations/MetarialSpinner';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const DeviceList = (props) => {
    const {model, SerialNumber, alarm1, key, format} = props.data
    return (
        <div   className="clients d-flex justify-content-evenly mb-5">
                    <div className="form-name"><p className="form-name-p">{model}</p></div>
                    <div title="Edit" className="meta_icon">
                    <EditIcon />
                    </div>
                    <Link title="select" className="meta_icon2"><ArrowForwardIcon/></Link>
                    
                </div>
    );
};

export default DeviceList;