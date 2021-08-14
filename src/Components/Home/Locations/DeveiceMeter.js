import React from 'react';
import './DeviceMeter.css';
import '../../../responsive.css';

import Spinner from '../../Shared/Spinner/Spinner'
import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../../App';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import {CanvasJSChart} from 'canvasjs-react-charts'
import PowerIcon from '@material-ui/icons/Power';


const DeveiceMeter = (props) => {
    const { voltage01, voltage02, voltage03, dateSocket, voltage04, vBat, txPower, rssiGateway, nMedicion, msActivo, longitude, latitude, current01, rassiGateWay, resistance, temperature, nMessages } = props.data;
    
    const [voltageData, setVoltageData] = useState({
        voltageName: '',
        voltage: ''
    });
    const [user, setUser] = useContext(userContext)

    
  
  

    const handleVoltage01 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage01;
        newVoltage.voltageName = 'voltage01'
        setVoltageData(newVoltage);
    };
    const handleVlotage02 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage02;
        newVoltage.voltageName = 'voltage02'
        setVoltageData(newVoltage);
    }
    const handleVolage03 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage03;
        newVoltage.voltageName = 'voltage03'
        setVoltageData(newVoltage);
    }
    const handleVlotage04 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage04;
        newVoltage.voltageName = 'voltage04'
        setVoltageData(newVoltage);
    }
    const handleWeek = () => {
        const newClick = {...props.pastDataTrig}
        newClick.present = true
        newClick.week= true;
        newClick.day = true;
        newClick.halfDay = true;
        newClick.sixH= true;
        newClick.oneH= true;
        setUser(newClick)
    }
    const handleDay =() => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = true;
        newClick.halfDay = false;
        newClick.sixH= false;
        newClick.oneH= false;
        setUser(newClick)
    }
    const handleHalfDay = () => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = true;
        newClick.sixH= false;
        newClick.oneH= false;
        setUser(newClick)
    }
    const handleSixH = () => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = false;
        newClick.sixH= true;
        newClick.oneH= false;
        setUser(newClick)
    }
    const handleOneH = () => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = false;
        newClick.sixH= false;
        newClick.oneH= true;
        setUser(newClick)
    }
    let unix_timestamp = dateSocket;
    var date = new Date(unix_timestamp);
    let fullDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    const fullTIme = `${fullDate}/${month}/${year}`

    const options = {
        animationEnabled: true,	
        theme: "light2",
        title:{
            text: "VCC"
        },
        axisY : {
            title: "Number of Vcc"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "line",
            name: "Vcc1",
            showInLegend: true,
            dataPoints:[{}],
        },
        {
            type: "line",
            name: "Vcc2",
            showInLegend: true,
            dataPoints:[{}],
        },
        {
            type: "line",
            name: "Vcc3",
            showInLegend: true,
            dataPoints:[{}],
        },

       
    ]
}
    for(let i =0; i < props.pastData.length; i++){
        const date = new Date(props.pastData[i].dateSocket)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const day = date.getUTCDay()
        let elements = {y:props.pastData[i].voltage01, label:`days:${day},Hours: ${hours},minutes:${minutes}`};
        options.data[0].dataPoints[i] = elements
        let elements2 = {y:props.pastData[i].voltage02, label:`days:${day},Hours: ${hours},minutes:${minutes}`};
        options.data[1].dataPoints[i] = elements2
        let elements3 = {y:props.pastData[i].voltage03, label:`days:${day},Hours: ${hours},minutes:${minutes}`};
        options.data[2].dataPoints[i] = elements3
    }
    
       
    console.log({options});

    
    return (
        <div className="container">
            <h1 className="meter-text">Meter</h1>

            <div className="device-meter-container">
                {voltage01 >= 0 && <div className="tableArea">
                    <div className="row thead tableHead">
                        <div className="col-md-4 meter-col">
                            <p>Date</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 1</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 2</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 3</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 4</p>
                        </div>

                        <div className="col-md-3 meter-col">
                            <p>Current 1</p>
                        </div>
                    </div>
                    <div className="row tbody">
                        <div className="col-md-4 meter-data" data-content="Date">
                            {<p>{fullTIme}</p> }
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 1" onClick={handleVoltage01}>
                           {voltage01 && <p>{voltage01}V</p>}
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 2" onClick={handleVlotage02}>
                            {voltage01 && <p>{voltage02}V</p>}
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 3" onClick={handleVolage03}>
                            {voltage01 && <p>{voltage03}V</p>}
                        </div>
                      <div className="col-md-1 meter-data" data-content="Vcc 3" onClick={handleVlotage04}>
                           {voltage01 &&  <p>{voltage04}V</p>}
                        </div>

                        <div className="col-md-3 meter-data" data-content="Current 1">
                            <p>{current01}A</p>
                        </div>
                    </div>
                </div>}
                <div>
                    <div className="row my-2 status-container">
                        {vBat >= 0 && <div className="col-xl-3 col-md-2 text-start p-0 status-data-container statusBar">
                            <span className="status-title">Status:</span>
                            <span>Ok</span>
                        </div>}
                        {fullTIme !== "NaN/NaN/NaN" && <div className="col-xl-6 col-md-8 p-0 status-mid-data statusBar2">
                            <span className="status-title">Last connection:</span>
                            <span className="status-data-date">{formattedTime}</span>
                            <span>{fullTIme}</span>
                        </div>}
                        {fullTIme === "NaN/NaN/NaN" && <Spinner/>}
                       {vBat >= 0 && <div className="col-xl-3 col-md-2 text-end p-0 status-data-container statusBar">
                            <span className="status-title">Vbat:</span>
                            <span>{vBat}V</span>
                        </div>}
                    </div>
                </div>
                 <CanvasJSChart options = {options}/>
                <div className="chart-btn">
                    <ul className="d-flex justify-content-end chart-lists">
                        <li className="bg-success chart-list text-light graphColor" onClick={handleWeek}>1W</li>
                        <li className="bg-success chart-list text-light graphColor" onClick={handleDay}>1D</li>
                        <li className="bg-success chart-list text-light graphColor" onClick={handleHalfDay}>12H</li>
                        <li className="bg-success chart-list text-light graphColor" onClick={handleSixH}>6h</li>
                        <li className="bg-success chart-list text-light graphColor" onClick={handleOneH}>1h</li>
                    </ul>
                </div>
                
                <div className="">
                    <div>
                        <div>
                            <p className="row title-control">Control</p>
                            
                            <div className="row mb-3">
                                <div className="col-xl-3 col-lg-3">
                                    <p className="control-input-text">Period :</p>
                                </div>
                                <div className="col-xl-5 col-lg-5 control-input-box"><input className="form-control" type="number" value={latitude} /></div>
                                <div className="col-xl-4 col-lg-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <p className="control-input-text">Freq :</p>
                                </div>
                                <div className="col-xl-5 col-lg-5 control-input-box"><input className="form-control" type="number" value={longitude} /></div>
                                <div className="col-xl-4 col-lg-4"></div>
                            </div>
                            <div className="meter-button d-flex justify-content-end">
                                <div className="btn btn-primary button1 graphColor"><span>INT CYCLE</span></div>
                                <div className="btn btn-primary button2 graphColor"><span>ON / OFF</span></div>
                            </div>

                               <div className='d-flex justify-content-between mb-5'>
                               <div className="DefaultData1 d-flex justify-content-center pt-5">
                                <h1 className="text-light"><PowerIcon style={{fontSize:'80px'}}/></h1>
                                {txPower >= 0 && <h1 className="text-light">TXPower : {txPower}</h1> }
                                </div>
                                <div className="DefaultData2 d-flex justify-content-center pt-5">
                                <h1 className="text-light"><SettingsApplicationsOutlinedIcon style={{fontSize:'80px'}}/></h1>
                                <div className=" device-meter-list-container d-flex justify-content-between">
                                    {rssiGateway >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">rssiGateway :</h5> {rssiGateway}</li>}
                                    {nMedicion >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">nMedicion :</h5> {nMedicion}</li>}
                                    {msActivo >= 0 && <li className="text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">msActivo :</h5> {msActivo}</li>}
                                    {rassiGateWay >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">rassiGateWay :</h5> {rassiGateWay}</li>}
                                    {resistance >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">resistance :</h5> {resistance}</li>}
                                    {temperature >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">temperature :</h5> {temperature}</li>}
                                    {nMessages >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list text-light mb-2" htmlFor="">nMessages :</h5> {nMessages}</li>}
                                    </div>
                                </div>
                               </div>
                                
                            </div>
                    </div>

                </div>
            </div>
           
        </div>
    );
};

export default DeveiceMeter;