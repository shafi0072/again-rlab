import React, { useState } from 'react';

import './Command.css';
import db from '../../FirebaseConfig/Firebase';



const Command = () => {
    const [pubSubM, setPubSubM] = useState({
        Device_id:'',
        Command:'',
    })
const handleOnChange = (event) => {
    const newPubSubM = {...pubSubM};
    newPubSubM[event.target.name] = event.target.value;
    setPubSubM(newPubSubM)
}
const handleSubmit = (e) => {
    db.collection("Command").add(pubSubM)
    .then((docRef) => {
        
    })
    .catch((error) => {
        
    });
    e.preventDefault();
}

    return (
        <div className="command-main-container mb-5">
            <h1 className='text-dark command-title'>Send command in Google Cloud Pub/sub</h1>
            <div className="command-container">
                <form action="" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-end topic-container">
                        <label className="command-text text-dark" htmlFor="topic">Device_id:</label>
                        <input className="command-input text-dark" type="text" placeholder="Device_id" name="Device_id" id="topic" onChange={handleOnChange}/>
                    </div>
                    
                    <div className="d-flex justify-content-end topic-container">
                        <label className="command-text text-dark" htmlFor="sub">Command:</label>
                        <textarea className="command-input" placeholder="Command" id="Command" name="Command" onChange={handleOnChange}/>
                    </div>
                    <div className="text-end">
                        <button className="btn btn-primary command-button" type="submit" >Send</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Command;