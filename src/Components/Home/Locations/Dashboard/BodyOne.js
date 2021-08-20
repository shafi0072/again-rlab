import React, { useContext, useEffect, useState } from 'react';
import Battery60OutlinedIcon from '@material-ui/icons/Battery60Outlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import './Meter2.css';
import './MeterResponsive.css';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import WarningIcon from '@material-ui/icons/Warning';
import FastForwardIcon from '@material-ui/icons/FastForward';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';

import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

import db from '../../../FirebaseConfig/Firebase'

import { Line , Bar } from "react-chartjs-2";


import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import { userContext } from '../../../../App';

import {Link} from 'react-router-dom'





const BodyOne = (props) => {
    // recent status
    const { voltage01, voltage02, voltage03, dateSocket, vBat, txPower, rssiGateway, nMedicion, msActivo,  current01} = props.data;
    const [location, setLocation] = useState({})



    // context
    const [user, setUser] = useContext(userContext)

    // Timeing
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

    //   event handler for past data
    const handleWeek = (e) => {
        const newClick = {...props.pastDataTrig}
        newClick.present = true
        newClick.week= true;
        newClick.day = true;
        newClick.halfDay = true;
        newClick.sixH= true;
        newClick.oneH= true;
        setUser(newClick)
        e.preventDefault()
    }
    const handleDay =(e) => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = true;
        newClick.halfDay = false;
        newClick.sixH= false;
        newClick.oneH= false;
        setUser(newClick)
        e.preventDefault()
    }
    const handleHalfDay = (e) => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = true;
        newClick.sixH= false;
        newClick.oneH= false;
        setUser(newClick)
        e.preventDefault()
    }
    const handleSixH = (e) => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = false;
        newClick.sixH= true;
        newClick.oneH= false;
        setUser(newClick)
        e.preventDefault()
    }
    const handleOneH = (e) => {
        const newClick = {...user}
        newClick.present = true
        newClick.week= false;
        newClick.day = false;
        newClick.halfDay = false;
        newClick.sixH= false;
        newClick.oneH= true;
        setUser(newClick)
        e.preventDefault()
    }
    const data = {
        labels: [],
        datasets: [
          {
            label: "Vcc1",
            data: [],
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Vcc2",
            data: [],
            fill: false,
            borderColor: "#742774"
          },
          {
              label: "Vcc3",
              data: [],
              fill: false,
              borderColor: "#eb9234"
            }
        ]
      };

      
const data2 = {
    labels: [],
    datasets: [
      {
        label: 'Vcc1',
        data: [],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Vcc2',
        data: [],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Vcc3',
        data: [],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
    for(let i =0; i < props.pastData.length; i++){
        const date = new Date(props.pastData[i].dateSocket)
        const day = date.getUTCDay()
        let elements = props.pastData[i].voltage01;
        data.datasets[0].data[i] = elements;
        data2.datasets[0].data[i] = elements;
        let elements2 = props.pastData[i].voltage02;
        data.datasets[1].data[i] = elements2;
        data2.datasets[1].data[i] = elements2;
        let elements3 =  props.pastData[i].voltage03;
        data.datasets[2].data[i] = elements3;
        data2.datasets[2].data[i] = elements3;

        if(user.week){
            data.labels[i] = `days:${day}` 
            data2.labels[i] = `days:${day}` 
        }
        else if (user.day){
            data.labels[i] = `days:${day}` 
            data2.labels[i] = `days:${day}` 
        }
        else if(user.halfDay){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`  
        }
        else if(user.sixH){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`
        }
        else if(user.oneH){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`
        }
    }
    useEffect(() => {
        const userDb =  db.collection("location").doc(props.lid).onSnapshot((doc) => {
            setLocation({...doc.data(), key:doc.id});
           
        });
        return userDb;
    }, [props.lid])

    return (
        <div>
        <div className="row">
            <div className="col-md-8">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Voltage 1:</h4>
                        </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Vcc1:<h3 className="meter-item-value">{voltage01}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Voltage 2:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Vcc2:<h3 className="meter-item-value">{voltage02}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Voltage 3:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Vcc3:<h3 className="meter-item-value">{voltage03}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Current:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <FastForwardIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Current:<h3 className="meter-item-value">{current01} <span style={{fontSize:'12px'}}>A</span></h3></h5>
                    </div>
                   </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'100%'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Date:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <DateRangeIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Date:<h3 className="meter-item-value">{fullTIme}</h3></h5>
                    </div>
                   </div>
                        </div>
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Last Connections:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <AccessAlarmsOutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Time:<h3 className="meter-item-value">{formattedTime}</h3></h5>
                    </div>
                   </div>
                        </div>
                    </div>
                   
                </div>
                   
            </div>
        </div>
            <div className="row mt-3">
            <div className="col-md-2 mb-2">
                <div className="bg-light d-flex align-items-center justify-content-center boxMakingFor ps-3" style={{width:'100%', height:'100%'}}>
                    <img style={{maxWidth:'85%', maxHeight:'98%', borderRadius:'10px'}} src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9jYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
            </div>
            <div className="col-md-2 mb-2">
            
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Battery Health:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <Battery60OutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Vbat:<h3 className="meter-item-value">{vBat}</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mb-2">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="ps-3  pt-2">
                        <h4 className="meter-item-title">Rssi Gateway:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <OpacityOutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">RssiGateway:<h3 className="meter-item-value">{rssiGateway}</h3></h5>
                    </div>
                   </div>
                        </div>
                        <div className="col-md-6">
                        <div className="ps-3  pt-2">
                        <h4 className="meter-item-title">N Medicion:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <HealingOutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">nMedicion:<h3 className="meter-item-value">{nMedicion}</h3></h5>
                    </div>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                <div className="ps-3  pt-2">
                        <h4 className="meter-item-title">MS Active:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <NotificationsActiveOutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">msActivo:<h3 className="meter-item-value">{msActivo}</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        
        <div className="row mt-3">
            <div className="col-md-8">
                <div className="bg-light boxMakingFor" >
                <Line data={data} height={100}/>
                <div className="d-flex justify-content-end">
                <button className="btn btn-dark" style={{width:'120px'}} onClick={handleWeek}>1 Week</button>
                <button className="btn btn-dark ms-1" style={{width:'120px'}} onClick={handleDay}>1 Day</button>
                <button className="btn btn-dark ms-1" style={{width:'120px'}} onClick={handleHalfDay}>12 Hours</button>
                <button className="btn btn-dark ms-1" style={{width:'120px'}} onClick={handleSixH}>6 Hours</button>
                <button className="btn btn-dark ms-1" style={{width:'120px'}} onClick = {handleOneH}>1 Hour</button>
                </div>
                </div>
            </div>
            <div className="col-md-3">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'350px'}}>
                <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">TxPower:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <PowerSettingsNewOutlinedIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">TxPower:<h3 className="meter-item-value">{txPower}</h3></h5>
                    </div>
                   </div>
                   <div className="row mt-2">
                    <div className="col-md-6 text-center">
                        
                    </div>
                    <div className="col-md-6 text-center">
                    
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 text-center">
                        
                    </div>
                    <div className="col-md-6 text-center">
                    
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-center">
                        
                    </div>
                    
                </div>
                </div>
               
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-8">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'100%'}}>
                <Bar data={data2} options={options} height={100}/>
                </div>
            </div>
            <div className="col-md-3">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'100%'}}>
            <div className="ps-3 pt-2">
                        <h4 className="meter-item-title">Other Devices:</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <DevicesOtherIcon id="meter-icon"/>
                    <div>
                        <h5 className="meter-item">Device Length:<h3 className="meter-item-value">3 for this location</h3></h5>
                    </div>
                    
                   </div>
                   <div className="row mb-3">
                        <div className="col-md-12 text-center d-flex justify-content-center">
                        <Link title="select" to={`/location/${location.key}/${location.Device_id_1}`}><h4 >{location.Device_id_1}</h4></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center d-flex justify-content-center">
                        <Link title="select" to={`/location/${location.key}/${location.Device_id_2}`}><h4 >{location.Device_id_2}</h4></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BodyOne;