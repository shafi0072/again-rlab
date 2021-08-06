import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png';


import db from '../../FirebaseConfig/Firebase'

const UserHome = () => {
   
    
    const [dbUserData, setDbUserData] = useState([]);
    
   
    useEffect(() => {
        const getDataFirebase = [];
        const userDb = db.collection("user").onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            setDbUserData(getDataFirebase);
            
        });
        
       return userDb;
    }, []);
   
    
    return (
        <div className='row'>
            <div className="col-md-1">
                 <Navbar/>
            </div>
            <div className="col-md-11 backgroundSIDE text-center">
            
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                <User data={dbUserData}/>

                
               
                
            </div>
        </div>
    );
};

export default UserHome;