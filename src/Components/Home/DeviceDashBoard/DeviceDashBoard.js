import React, {useEffect, useState} from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'
import {useContext} from 'react';
import {userContext} from '../../../App';

const DeviceDashBoard = () => {
    let {format, id} = useParams();

    const [status, setStatus] = useState([])
    const [loading, setLoading] = useState(true);
    const [pastData, setPastData] = useState([]);
    const [day, setDay] = useState([]);
    const [halfDay, setHalfDay] = useState([]);
    const [sixH, setSixH] = useState([]);
    const [oneH, setOneH] = useState([]);
    
    // const [pastData, setPastData] = useState({   present:true,   week:false,
    // day:false,   halfDay:false,   sixH:false,   oneH:false })
    const [user, setUser] = useContext(userContext)

    async function arrayFunc(arr, key) {
        let resultArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].dateSocket <= key) {
                resultArray = await arr[i];
            }
        }
        return resultArray
    };

    //  function for liner search start finish |^ linear search shorting data

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
        
    }, [loading, format, id, user]);
    useEffect(() => {
         
          
          let UnixTimeFOrToday = Date.now() - 5*60000;


          let unixToWeek = UnixTimeFOrToday - 7*24*60*60000;
          db.collection(id).where("dateSocket", ">", unixToWeek).where("dateSocket", "<", UnixTimeFOrToday).limit(1000)
          .get()
          .then((querySnapshot) => {
            let getDataFirebase = [];
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  getDataFirebase.push({...doc.data(),key: doc.id});
              });
              setPastData(getDataFirebase[999])
              console.log({getDataFirebase})
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });
        
        
            
            
            let unixToDay = UnixTimeFOrToday - 24*60*60000;
            db.collection(id).where("dateSocket", ">", unixToDay).where("dateSocket", "<=", UnixTimeFOrToday).limit(200)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setDay(getDataFirebase[199])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          
          
            
            
            let unixToHalfDay = UnixTimeFOrToday - 4.32e+7;
            db.collection(id).where("dateSocket", ">=", unixToHalfDay).where("dateSocket", "<=", UnixTimeFOrToday).limit(200)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setHalfDay(getDataFirebase[199])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          
          
            
           
            let unixToSix= UnixTimeFOrToday - 2.16e+7;
            db.collection(id).where("dateSocket", ">=", unixToSix).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setSixH(getDataFirebase[99])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          
         
            
            let unixToOneH = UnixTimeFOrToday - 3.6e+6;
            db.collection(id).where("dateSocket", ">=", unixToOneH).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setOneH(getDataFirebase[23])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          
    }, [user, id,setOneH, setHalfDay, setSixH, setDay, setPastData]);
    
    console.log('dateSocket', 1627894069369 - 6.048e+8)
    console.log({pastData})
    console.log({day});
    console.log({halfDay});
    console.log({sixH});
    console.log({oneH});
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