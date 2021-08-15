import React, { useContext } from 'react';
import Battery60OutlinedIcon from '@material-ui/icons/Battery60Outlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import './Meter2.css'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import WarningIcon from '@material-ui/icons/Warning';
import FastForwardIcon from '@material-ui/icons/FastForward';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessAlarmsOutlinedIcon from '@material-ui/icons/AccessAlarmsOutlined';

import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';


import { Line , Bar } from "react-chartjs-2";


import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import { userContext } from '../../../../App';







const BodyOne = (props) => {
    // recent status
    const { voltage01, voltage02, voltage03, dateSocket, vBat, txPower, rssiGateway, nMedicion, msActivo,  current01} = props.data;




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
        const hours = date.getHours()
        const minutes = date.getMinutes()
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

        if(user.week === true){
            data.labels[i] = `days:${day}` 
            data2.labels[i] = `days:${day}` 
        }
        else if (user.day === true){
            data.labels[i] = `days:${day}` 
            data2.labels[i] = `days:${day}` 
        }
        else if(user.halfDay === true){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`  
        }
        else if(user.sixH === true){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`
        }
        else if(user.oneH === true){
            data.labels[i] = `days:${day}`
            data2.labels[i] = `days:${day}`
        }
    }

    return (
        <div>
            <div className="row">
            <div className="col-md-2 mb-2">
                <div className="bg-light d-flex align-items-center justify-content-center boxMakingFor " style={{width:'100%', height:'168px'}}>
                    <img style={{maxWidth:'99%', maxHeight:'98%', borderRadius:'10px'}} src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9jYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
            </div>
            <div className="col-md-2 mb-2">
            
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="ps-3 pt-2">
                        <h4>Battery Health:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <Battery60OutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Vbat:<h3>{vBat}</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mb-2">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4>Rssi Gateway:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <OpacityOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>RssiGateway:<h3>{rssiGateway}</h3></h5>
                    </div>
                   </div>
                        </div>
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4>N Medicion:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <HealingOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>nMedicion:<h3>{nMedicion}</h3></h5>
                    </div>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                <div className="ps-3 pt-2">
                        <h4>MS Active:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <NotificationsActiveOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>msActivo:<h3>{msActivo}</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="row">
                    <div className="col-md-3">
                        <div className="ps-3 pt-2">
                        <h4>Voltage 1:</h4>
                        </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Vcc1:<h3>{voltage01}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4>Voltage 2:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Vcc2:<h3>{voltage02}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4>Voltage 3:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <WarningIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Vcc3:<h3>{voltage03}</h3></h5>
                    </div>
                   </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ps-3 pt-2">
                        <h4>Current:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <FastForwardIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Current:<h3>{current01} <span style={{fontSize:'12px'}}>A</span></h3></h5>
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
                        <h4>Date:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <DateRangeIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Date:<h3>{fullTIme}</h3></h5>
                    </div>
                   </div>
                        </div>
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4>Last Connections:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <AccessAlarmsOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Time:<h3>{formattedTime}</h3></h5>
                    </div>
                   </div>
                        </div>
                    </div>
                   
                </div>
                   
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-8">
                <div className="bg-light boxMakingFor" >
                <Line data={data} height={100}/>
                </div>
            </div>
            <div className="col-md-3">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'390px'}}>
                <div className="ps-3 pt-2">
                        <h4>TxPower:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <PowerSettingsNewOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>TxPower:<h3>{txPower}</h3></h5>
                    </div>
                   </div>
                   <div className="row mt-2">
                    <div className="col-md-6 text-center">
                        <button className="btn btn-dark" style={{width:'120px'}} onClick={handleWeek}>1 Week</button>
                    </div>
                    <div className="col-md-6 text-center">
                    <button className="btn btn-dark" style={{width:'120px'}} onClick={handleDay}>1 Day</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 text-center">
                        <button className="btn btn-dark" style={{width:'120px'}} onClick={handleHalfDay}>12 Hours</button>
                    </div>
                    <div className="col-md-6 text-center">
                    <button className="btn btn-dark" style={{width:'120px'}} onClick={handleSixH}>6 Hours</button>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 text-center">
                        <button className="btn btn-dark" style={{width:'120px'}} onClick = {handleOneH}>1 Hour</button>
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
                        <h4>Other Devices:</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <DevicesOtherIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Device Length:<h3>12004</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default BodyOne;