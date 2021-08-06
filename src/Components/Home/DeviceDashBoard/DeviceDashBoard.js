import React, {useEffect, useState} from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {useParams} from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'
import {useContext} from 'react';
import {userContext} from '../../../App';

const DeviceDashBoard = () => {
    let {format, id} = useParams();

    const [status, setStatus] = useState([])
    
    const [pastData, setPastData] = useState([]);
    const [day, setDay] = useState([]);
    const [halfDay, setHalfDay] = useState([]);
    const [sixH, setSixH] = useState([]);
    const [oneH, setOneH] = useState([]);
    

    const [user] = useContext(userContext)

    



    useEffect(() => {
        if (user.present === true) {
            const userDb = db
                .collection("RealTime")
                .doc(id)
                .onSnapshot((querySnapshot) => {

                    setStatus({
                        ...querySnapshot.data(),
                        key: querySnapshot.id
                    });

                    // const maxNumber1 = maxNumber(getDataFirebase);

                });
            return userDb;
        }
        
    }, [ format, id, user]);
    useEffect(() => {
         
          
          let UnixTimeFOrToday = Date.now() - 5*60000;


          let unixToWeek = UnixTimeFOrToday - 7*24*60*60000;
          db.collection(id).where("dateSocket", ">", unixToWeek).where("dateSocket", "<", UnixTimeFOrToday).limit(1000)
          .onSnapshot((querySnapshot) => {
            let getDataFirebase = [];
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  getDataFirebase.push({...doc.data(),key: doc.id});
              });
              setPastData(getDataFirebase[999])
          })
          
        
        
            
            
            let unixToDay = UnixTimeFOrToday - 24*60*60000;
            db.collection(id).where("dateSocket", ">", unixToDay).where("dateSocket", "<=", UnixTimeFOrToday).limit(200)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setDay(getDataFirebase[199])
            })
            
          
          
            
            
            let unixToHalfDay = UnixTimeFOrToday - 4.32e+7;
            db.collection(id).where("dateSocket", ">=", unixToHalfDay).where("dateSocket", "<=", UnixTimeFOrToday).limit(200)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setHalfDay(getDataFirebase[199])
            })
            
          
          
            
           
            let unixToSix= UnixTimeFOrToday - 2.16e+7;
            db.collection(id).where("dateSocket", ">=", unixToSix).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setSixH(getDataFirebase[99])
            })
            
          
         
            
            let unixToOneH = UnixTimeFOrToday - 3.6e+6;
            db.collection(id).where("dateSocket", ">=", unixToOneH).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setOneH(getDataFirebase[23])
            })
            
          
    }, [user, id,setOneH, setHalfDay, setSixH, setDay, setPastData]);
    
    
    return (
        <div className='row'>
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11 text-center">
                <img
                    src={logo}
                    alt=""
                    style={{
                        width: '20%'
                    }}
                    className='mt-5'/>

                <DeveiceMeter data={status} pastData={pastData} day={day} halfDay={halfDay} sixH={sixH} oneH={oneH}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;