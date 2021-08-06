import React, {useContext, useState} from 'react';

import './Devices.css';
import '../../../responsive.css';

import db from '../../FirebaseConfig/Firebase'

import {Button, Form, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useEffect } from 'react';
import DeviceList from './DeviceList';
import { userContext } from '../../../App';
const Devices = () => {
    const [devicesData, setDevicesData] = useState({
        model: '',
        SerialNumber: '',
        Commission: '',
        alarm1: '',
        alarm2: '',
        format: 'ENER01'
    });
    const [devices, setDevices] = useState([

    ])
    const handleChange = (event) => {
        const newDevices = {
            ...devicesData
        };
        newDevices[event.target.name] = event.target.value;
        console.log(newDevices);
        setDevicesData(newDevices);

    };
    const [user, setUser] = useContext(userContext)
    const handleSubmit = (e) => {
        db
            .collection("Devices")
            .add(devicesData)
            .then((docRef) => {})
            .catch((error) => {});
        db
            .collection(devicesData.model)
            .add(devicesData)
            .then((docRef) => {})
            .catch((error) => {});
        e.preventDefault()

    }

    useEffect(() => {
        const getDataFirebase = [];
        const userDb = db.collection("Devices").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            setDevices(getDataFirebase);
            
        });
        
       return userDb;
    },[])

    return (

        <div>
            {user.admin && <Form unstackable="unstackable" onSubmit={handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Device Model'
                        name="model"
                        onChange={handleChange}
                        placeholder='Energy Meter'/>

                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Serial Number'
                        name="SerialNumber"
                        onChange={handleChange}
                        placeholder='ABCb012345'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Commissioning Date'
                        name="Commission"
                        onChange={handleChange}
                        placeholder='153278942329'/>

                </Form.Group>
                <Form.Group widths={2}>

                    <Form.Input
                        required
                        label='Level_Alarm_Var01'
                        name="alarm1"
                        onChange={handleChange}
                        placeholder='30.35'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Level_Alarm_Var02'
                        name="alarm2"
                        onChange={handleChange}
                        placeholder='30.35'/>
                </Form.Group>
                <button className="btn btn-primary">Add/Save</button>
            </Form>}
            {
                devices.map(data => {return <DeviceList data={data}/>})
            }
        </div>

    );
};

export default Devices;