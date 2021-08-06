import React, { useContext, useState } from 'react';
import { userContext } from '../../../App';
import LocationUser from './LocationUser';

import './Location.css';
import '../../../responsive.css'



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
        <div className="container">
           {user.admin && <div className="row d-flex justify-content-end align-items-center mt-5">
           <form action="" onSubmit={handleSubmit}>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark location-title-text" htmlFor="locationId" style={{marginRight:'60px'}} >Location ID</label>
                    <input className="location-title-input" type="text" id='locationId' placeholder='PlantaLiners' name="LocationID" onChange={handleChange}/>
                </div>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark location-title-text" htmlFor="DeviceName" style={{marginRight:'56px'}}>Add Device</label>
                    <input className="location-title-input" type="text" id='DeviceName' placeholder='Device Name' name="addDevices" onChange={handleChange}/>
                </div>
                <div className="d-flex justify-content-end location-button-div">
                    <button className="btn btn-primary mb-3 location-button" style={{marginLeft:'61.6%'}} onClick={handleClick}>Add New Device</button>
                </div>
                
                 
                {addDevices.click && <div>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark location-title-text" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_1</label>
                    <input className="location-title-input" type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_1" onChange={handleChange}/>
                </div>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark location-title-text" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_2</label>
                    <input className="location-title-input" type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_2" onChange={handleChange}/>
                </div>
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark location-title-text" htmlFor="modelOfDevice" style={{marginRight:'60px'}}>Device_id_3</label>
                    <input className="location-title-input" type="text" id='modeOfDevice' placeholder='Meter_ABC' name="Device_id_3" onChange={handleChange}/>
                </div>
                </div>}
            
                <div className="title-name mb-3 d-flex justify-content-end">
                    <label className="text-dark file-text location-title-text" htmlFor="image">Image</label>
                    <input className="location-title-input" type="file" id='image' placeholder='30.5'/>
                </div>
                <div className="d-flex justify-content-end location-button-div">
                    <button className="btn btn-primary location-button" style={{marginLeft:'65%'}} type="submit">Create/Save</button>
                </div>
                
            </form>
            </div>}
                <div className="row mt-5">
                { DBLocationData.map(data => {return <LocationUser data={data}/>})}
                </div>
            
        </div>
    );
};

export default Locations;