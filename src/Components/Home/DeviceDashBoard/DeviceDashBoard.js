import React, {useEffect, useState} from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {useParams} from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'
import {useContext} from 'react';
import {userContext} from '../../../App';
import HeaderDashBoard from '../Locations/Dashboard/HeaderDashBoard';

const DeviceDashBoard = () => {
    let {format, id} = useParams();

    const [status, setStatus] = useState([])
    
    const [pastData, setPastData] = useState([]);
    
    

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
         
        let UnixTimeFOrToday = Date.now();
          if(user.week === true){
            
            let unixToWeek = UnixTimeFOrToday - 6.048e+8;
            db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase)
               
            })
          }
          
        
        
           else if(user.day === true){
            let unixToDay = UnixTimeFOrToday - 8.64e+7;
            db.collection(id).where("dateSocket", ">", unixToDay).where("dateSocket", "<=", UnixTimeFOrToday)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase)
            })
            }
            
            
            
          
          
            else if(user.halfDay === true){
            let unixToHalfDay = UnixTimeFOrToday - 4.32e+7;
            db.collection(id).where("dateSocket", ">=", unixToHalfDay).where("dateSocket", "<=", UnixTimeFOrToday)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase)
            })
            
            }
            
            
          
          
            
           else if(user.sixH === true){
            let unixToSix= UnixTimeFOrToday - 2.16e+7;
            db.collection(id).where("dateSocket", ">=", unixToSix).where("dateSocket", "<=", UnixTimeFOrToday)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase)
            })
           }
            
            
          
         
            else if(user.oneH === true){
            let unixToOneH = UnixTimeFOrToday - 3.6e+6;
            db.collection(id).where("dateSocket", ">=", unixToOneH).where("dateSocket", "<=", UnixTimeFOrToday)
            .onSnapshot((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase)
            })
            }
            
            
          
    }, [user, id,setPastData]);
    
    console.log({pastData})
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

                {/* <DeveiceMeter data={status} pastData={pastData}/> */}
                <HeaderDashBoard data={status} pastData={pastData}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;