import React, { useState } from 'react';

import './Command.css';
import db from '../../FirebaseConfig/Firebase';

import { Form } from 'semantic-ui-react'

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
        <div className="mainFormWidth mb-5">
            
            <div className="deviceMainForm">
                <Form unstackable="unstackable" onSubmit={handleSubmit}>
                
                    <Form.Group widths={2}>
                    <Form.Input
                        required
                        label='Device_id:'
                        name="Device_id"
                        onChange={handleOnChange}
                        placeholder='Device_id'/>

                </Form.Group>
                    <Form.Group widths={2}>
                    <Form.TextArea
                        required
                        label='Command:'
                        name="Command"
                        onChange={handleOnChange}
                        placeholder='Command'/>

                </Form.Group>
                <p className="text-success">Click to send command</p>
                <button className="btn btn-Custom"  type="submit">Send</button>
                </Form>
            </div>
        </div>
    );
};

export default Command;