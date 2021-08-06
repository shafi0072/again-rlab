import React from 'react';
import './user.css';
import '../../../responsive.css';
import EditIcon from '@material-ui/icons/Edit';
const UserData = (props) => {
    const {name, Role} = props.data
    return (
        <div>
             <div className="clients d-flex justify-content-evenly mb-5">
                <div className="name form-name"><p>{name}</p></div>
                <select name="target " id="" className='selectProparty form-name' value={Role}>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea meta_icon2"><EditIcon/></button>
            </div> 
        </div>
    );
};

export default UserData;