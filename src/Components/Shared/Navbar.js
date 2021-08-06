import React from 'react';
import './Navbar.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Link} from 'react-router-dom'
import {useContext} from 'react';
import {userContext} from './../../App';
import {useHistory, useLocation} from 'react-router-dom';

const Navbar = () => {

   
    

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

   async function btnCLick() {
       let sidebar = await document.querySelector(".sidebar");
     await   sidebar
            .classList
            .toggle("open");
        menuBtnChange(); //calling the function(optional)
    };

    async  function serch() { // Sidebar open when you click on the search iocn
        let sidebar = await document.querySelector(".sidebar");
      await  sidebar
            .classList
            .toggle("open");
        menuBtnChange(); //calling the function(optional)
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

    return (
        <div>
            <div class="sidebar">
                <div class="logo-details">

                    <div class="logo_name">RLAB</div>
                    <i class='bx bx-menu' id="btn" onClick={btnCLick}></i>
                </div>
                <ul class="nav-list">
                    <li>
                        <i class='bx bx-search' onClick={serch}></i>
                        <input type="text" placeholder="Search..."/>
                        <span class="tooltip">Search</span>
                    </li>
                    <li>
                        <Link to="/userHome">
                            <i class='bx bx-grid-alt'></i>
                            <span class="links_name">User</span>
                        </Link>
                        <span class="tooltip">User</span>
                    </li>
                    <li>
                        <Link to="/location">
                            <i class='bx bx-current-location'></i>
                            <span class="links_name">Location</span>
                        </Link>
                        <span class="tooltip">Location</span>
                    </li>
                    <li>
                        <Link to="/devices">
                            <i class='bx bxs-devices'></i>
                            <span class="links_name">Device</span>
                        </Link>
                        <span class="tooltip">Device</span>
                    </li>
                    <li>
                        <Link to="/command">
                            <i class='bx bx-message-dots'></i>
                            <span class="links_name">Command</span>
                        </Link>
                        <span class="tooltip">Command</span>
                    </li>
                    <li class="profile">
                        <div class="profile-details">
                            <div class="name_job">
                                <div class="name">{user.email}</div>
                                <div class="job">{user.Role}</div>
                            </div>
                        </div>
                        <i class='bx bx-log-out' id="log_out" onClick={handleLogout}></i>
                    </li>
                </ul>
            </div>
            <section class="home-section"></section>
        </div>
    );
};

export default Navbar;