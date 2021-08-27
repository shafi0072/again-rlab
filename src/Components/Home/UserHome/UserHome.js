import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png';


import db from '../../FirebaseConfig/Firebase'

function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

const UserHome = () => {
   
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [dbUserData, setDbUserData] = useState([]);
    const [sideMenu, setSideMenu] = useState(false)
   
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
   
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className='row'>
        
            <div className="col-md-1">
            
                 {windowDimensions.width > 710 && <Navbar/>}
                 {sideMenu && <Navbar/>}
            </div>
            <div className="col-md-12 backgroundSIDE text-center" style={{position:'absolute'}}>
            
            
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            <button onClick={() => setSideMenu(true)}>Hello </button>
                <User data={dbUserData}/>
            </div>

                
               
                
            
        </div>
    );
};

export default UserHome;