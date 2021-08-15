import React, { useEffect, useState } from 'react';
import './Navbar.css';

import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {userContext} from './../../App';
import {useHistory, useLocation} from 'react-router-dom';
import db from './../FirebaseConfig/Firebase';
const Navbar = () => {

   
    

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [locations, setLocations] = useState([]);
    const [viewLocation, setViewLocation] = useState({
        open: false,
        close: true,
    })


    
   async function btnCLick() {
       let sidebar = await document.querySelector(".sidebar");
     await   sidebar
            .classList
            .toggle("open");
        menuBtnChange(); //calling the function(optional);
        const newLocation = {...viewLocation};
        newLocation.open = true;
        newLocation.close = false;
        setViewLocation(newLocation)
    };

    async  function serch() { // Sidebar open when you click on the search iocn
        let sidebar = await document.querySelector(".sidebar");
      await  sidebar
            .classList
            .toggle("open");
        menuBtnChange(); //calling the function(optional)
        const newLocation = {...viewLocation};
        newLocation.open = true;
        newLocation.close = false;
        setViewLocation(newLocation)
    };

    // following are the code to change sidebar button(optional)
  async  function menuBtnChange() {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
        if (sidebar.classList.contains("open")) {
           await closeBtn
                .classList
                .replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class

               
        } else {
          await  closeBtn
                .classList
                .replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
                const newLocation = {...viewLocation};
                newLocation.open = false;
                newLocation.close = true;
                setViewLocation(newLocation)
        }
    }

    const [user, setUser] = useContext(userContext)

    // log out
    const handleLogout = () => {
      const newUser = {...user};
      newUser.email = "";
      newUser.isSignedIn = false;
      newUser.success = false;
      setUser(newUser)
      history.replace(from)
    }
    useEffect(() => {
        const userDb =  db.collection("location").onSnapshot((querySnapshot) => {
            const getDataFirebase = [];
            querySnapshot.forEach((doc) => {
              getDataFirebase.push({...doc.data(), key:doc.id});
            });
            setLocations(getDataFirebase)
            
        });
        return userDb;
    }, [locations])
    return (
        <div>
            <div className="sidebar">
                <div className="logo-details">

                    <div className="logo_name">RLAB</div>
                    <i className='bx bx-menu' id="btn" onClick={btnCLick}></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <i className='bx bx-search' onClick={serch}></i>
                        <input type="text" placeholder="Search..."/>
                        <span className="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/userHome">
                            <i className='bx bx-grid-alt'></i>
                            <span className="links_name">User</span>
                        </Link>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <Link to="/location">
                            <i className='bx bx-current-location' style={{borderBottom:'1px solid white'}}></i>
                            <span className="links_name" style={{borderBottom:'1px solid white'}}>Location</span>
                        </Link>
                        <span className="tooltip">Location</span>
                        <ul>
                            {
                                viewLocation.open && locations.map(data =>  {return <Link className="location-user-text" to={`/locations/${data.key}`}><li className="links_name">{data.LocationID}</li></Link>})
                            }
                        </ul>
                    </li>
                    <li>
                        <Link to="/devices">
                            <i className='bx bxs-devices'></i>
                            <span className="links_name">Device</span>
                        </Link>
                        <span className="tooltip">Device</span>
                    </li>
                    <li>
                        <Link to="/command">
                            <i className='bx bx-message-dots'></i>
                            <span className="links_name">Command</span>
                        </Link>
                        <span className="tooltip">Command</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            <div className="name_job">
                                <div className="name">{user.email}</div>
                                <div className="job">{user.Role}</div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out" onClick={handleLogout}></i>
                    </li>
                </ul>
            </div>
            <section className="home-section"></section>
        </div>
    );
};

export default Navbar;