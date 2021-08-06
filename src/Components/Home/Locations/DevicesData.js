import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import './DeviceMeter.css';
import '../../../responsive.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import EditIcon from '@material-ui/icons/Edit';
const DevicesData = (props) => {
    const [user, setUser] = useContext(userContext)
    const {model,key, format} = props.data;
    const [edit, setEdit] = useState({
        editable:true,
        clickEdit: false
    })
    const handleEdit = () => {
        const newUser = {...edit};
        newUser.editable = false;
        newUser.clickEdit = true;
        setEdit(newUser);
        const newUserInfo = {...user};
        newUserInfo.deviceID = key;
        setUser(newUserInfo);
        
     };
    const handleSelect = (e) => {
        const newUser = {...user};
        newUser.notClick = false;
        newUser.click = true;
        newUser.deviceID = key;
        setUser(newUser);
        e.preventDefault()
    } 
    
    return (
        <div>
            <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p className="form-name-p">{model}</p></div>}
                    <EditIcon/>
                    <Link to={`/${format}/${key}`} className="btn btn-primary btnArea">Select</Link>
                </div>
        </div>
    );
};

export default DevicesData;