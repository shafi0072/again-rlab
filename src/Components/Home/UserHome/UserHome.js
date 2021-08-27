import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png';

import MenuIcon from '@material-ui/icons/Menu';
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
            
            
            {!sideMenu && windowDimensions.width > 710 && <img src={logo} alt="" style={{width:'10%'}} className='mt-5'/>}
            <div className="d-flex align-items-center justify-content-between ">
            {windowDimensions.width < 710 &&  <img src={logo} alt="" style={{width:'30%'}} className='mt-5'/>}
            {!sideMenu && windowDimensions.width < 710 && <button onClick={() => setSideMenu(true)} className="btn btn-success mt-3"><MenuIcon/></button>}
            {sideMenu   &&<button onClick={() => setSideMenu(false)} className="btn btn-success mt-3"><MenuIcon/></button>}
            </div>
                <User data={dbUserData}/>
            </div>

                
               
                
            
        </div>
    );
};

export default UserHome;