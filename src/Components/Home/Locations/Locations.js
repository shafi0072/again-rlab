import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';


import './Location.css';
import '../../../responsive.css'

import { Form} from 'semantic-ui-react'

import { useEffect } from 'react';

import db from '../../FirebaseConfig/Firebase'




const Locations = () => {
    const [user] = useContext(userContext);
    const [DBLocationData, setDBLocationData] = useState([])
    const [locationData, setLocationData] = useState({
        LocationID:'',
        addDevices:'',
        Device_id_1:'',
        Device_id_2:'',
        Device_id_3:'',
    });
    const [addDevices, setAddDevices] = useState({
        click: false,
    });

    const handleClick = (e) => {
        const newClick = {...addDevices};
        newClick.click = true;
        setAddDevices(newClick);
        e.preventDefault()
    }
    const handleSubmit = (e) => {
        db.collection("location").add(locationData)
        .then((docRef) => {
            
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        e.preventDefault();
    };
    const handleChange =(e) => {
        const newLocationData = {...locationData};
        newLocationData[e.target.name] = e.target.value;
        setLocationData(newLocationData)
        console.log(newLocationData)
    }; 
    useEffect(() => {
        const userDb =  db.collection("location").onSnapshot((querySnapshot) => {
            const getDataFirebase = [];
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            setDBLocationData(getDataFirebase)
        });
        return userDb
    },[])
    
    return (
        <div className="mainFormWidth mt-5">
           {user.admin && <div className="deviceMainForm">
           <Form unstackable="unstackable" onSubmit={handleSubmit} className="">
                
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Location ID'
                        name="LocationID"
                        onChange={handleChange}
                        placeholder='PlantaLiners'/>

                </Form.Group>
               
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Add Device'
                        name="addDevices"
                        onChange={handleChange}
                        placeholder='Device Name'/>

                </Form.Group>
                <button className="btn btn-Custom" onClick={handleClick}>Add New Device</button>
                {addDevices.click && <div className="mt-3">
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Device_id_1'
                        name="Device_id_1"
                        onChange={handleChange}
                        placeholder='Meter_ABC'/>

                </Form.Group>
               
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Device_id_2'
                        name="Device_id_2"
                        onChange={handleChange}
                        placeholder='Meter_ABC'/>

                </Form.Group>
               
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Device_id_3'
                        name="Device_id_3"
                        onChange={handleChange}
                        placeholder='Meter_ABC'/>

                </Form.Group>
                </div>}
            
               
                <Form.Group widths={2}>
                    <Form.Input
                    type="file"
                        required
                        label='Image'
                        placeholder='30.5'/>
                </Form.Group>
                
                <button className="btn btn-Custom" type="submit">Create/Save</button>
            </Form>
            </div>}
                
            
        </div>
    );
};

export default Locations;