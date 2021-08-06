import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import DeviceForm from './DevicesForm';

import './DeviceMeter.css'
import { useEffect } from 'react';
import { useState } from 'react';
import db from '../../FirebaseConfig/Firebase';

const LocationDevice = () => {
    const {Lid} = useParams();
    console.log({Lid});
    const [DBLocationDV, setDBLocationDV] = useState({})
    useEffect(() => {
        var docRef = db.collection("location").doc(Lid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setDBLocationDV({...doc.data(), key:doc.id});
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [Lid])
    console.log({DBLocationDV});
    return (
        <div className='row'>
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11">
                <DeviceForm data={DBLocationDV}/>
            </div>
        </div>
    );
};

export default LocationDevice;