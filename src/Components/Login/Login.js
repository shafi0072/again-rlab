import React, { useContext, useState } from 'react';

import './Login.css';
import '../../responsive.css';
import logo from '../../Resorces/logo_RLAB.png'
import { userContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import db from '../FirebaseConfig/Firebase'
if (!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const history = useHistory();
    const location = useLocation();

    

    const { from } = location.state || { from: { pathname: "/" } };

    const [click, setClick] = useState({
        login: true,
        signUp: false
    });
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true)
    const handleSignUp = () => {
        const newClick = {...click}
        newClick.login = false;
        newClick.signUp  = true;
        setClick(newClick)
    }
    
    const handleLogin = () => {
        const newClick = {...click}
        newClick.login = true;
        newClick.signUp  = false;
        setClick(newClick)
    };
    const [user, setUser] = useContext(userContext);
    const handleOnChange = (e) => {
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
        
    }
    const handleCreateAccount = (e) => {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.ConfirmPassword)
        .then(res => {
            const newUserInfo = {...user};
            newUserInfo.isSignedIn = true
            newUserInfo.error = "";
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserInfo(user.name)
            history.replace(from);
        }
        )
        .catch(error => {
            const newUserInfo = {
                ...user
            };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo)

        });
        e.preventDefault()
    }
   const handleSubmitLogin = (e) => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.ConfirmPassword)
    .then(res => {

        const newUserInfo = {
            ...user
        };
        newUserInfo.email = res.user.email;
        newUserInfo.error = "";
        newUserInfo.success = true;
        setUser(newUserInfo);
        history.replace(from);
    
    if(res.user.email === 'safi29317@gmail.com' || res.user.email === 'ulisesramos@gmail.com'){
        const newUser = {...user}
        newUser.admin = true;
        newUser.viewer = false;
        setUser(newUser);
    }else if(userData.Role === 'admin'){
        const newUser = {...user}
        newUser.admin = true;
        newUser.viewer = false;
        setUser(newUser);
    }
    else if(userData.Role === 'oparetors'){
        const newUser = {...user}
        newUser.admin = true;
        newUser.viewer = false;
        setUser(newUser);
    }
    else{
        const newUser = {...user}
        newUser.admin = false;
        newUser.viewer = true;
        setUser(newUser);
    }
    
        
    })
    .catch(function (error) {
        const newUserInfo = {
            ...user
        };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        
    })
    
    
    e.preventDefault()
   }
   const updateUserInfo = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
    displayName: name,
    }).then(function() {
   
    }).catch(function(error) {
    
    });
}
function arrayFunc(arr,key) {
    let resultArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].email === key){
            resultArray = arr[i];
        }
        
    }
   
    return resultArray
};
useEffect(() => {
    const userDb =  db.collection("user").onSnapshot((querySnapshot) => {
        const getDataFirebase = [];
        querySnapshot.forEach((doc) => {
          getDataFirebase.push({...doc.data(), key:doc.id});
        });
        
        if(getDataFirebase.length > 0){
            const functionalArray = arrayFunc(getDataFirebase, user.email)
            setUserData(functionalArray);
          
            setLoading(false)
           
        }
    });
    return userDb;
}, [user]);



    return (
        <div className='background d-flex justify-content-center p-5'>

            {click.login && <div className="loginBox">
                <div className="text-center">
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: '30%'
                        }}/>
                </div>
                <div className="loginText mt-5 text-center">
                    <h2
                        style={{
                            fontFamily: "'Raleway', sans-serif"
                        }}>Log In</h2>
                </div>
                <p className="text-danger">{user.error}</p>
                {user.success && <p className='text-success'>Log in successfull</p>}
                <form action="" onSubmit={handleSubmitLogin}>
                <div className="">
                    <div className="mb-3 row">

                        <div className="col-sm-10 input-box">
                            <input
                                onChange={handleOnChange}
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                name="email"
                                placeholder="User email"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 input-box">
                            <input
                                type="password"
                                onChange={handleOnChange}
                                className="form-control"
                                id="inputPassword"
                                name="ConfirmPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                </div>

                <div className="remember">
                    <input className="rememberCheckbox" type="checkbox"/>
                    <label htmlFor="">Remember Me</label>
                </div>
                <div className="forgotPass">
                    <Link to='/restPassword' className="forgotTxt">Forgot Password</Link>
                </div>
                <div>
                    <button className="form-control bg-primary text-light" type='submit'>Log In</button>
                </div>
                <div className="creatTxt">
                    <p>Don't have an account?<span onClick={handleSignUp} className="creatAccount">Create an account</span>
                    </p>
                </div>
                
                </form>
            </div>}

            {click.signUp && <div className="loginBox signup">
                <div className="text-center">
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: '30%'
                        }}/>
                </div>
                <div className="loginText mt-5 text-center">
                    <h2
                        style={{
                            fontFamily: "'Raleway', sans-serif"
                        }}>Sign Up</h2>
                </div>
                <p className='text-danger singup-error'>{user.error}</p>
                {user.success && <p className='text-success'>SignUp SuccessFull</p>}
                <form className="mt-4 creat-form" action="" onSubmit={handleCreateAccount}>
                <div className="">
                    <div className="mb-3 row">

                        <div className="col-sm-10 input-box">
                            <input
                                onChange={handleOnChange}
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                placeholder="First Name"
                                name="name"/>
                        </div>
                    </div>
                    <div className="mb-3 row">

                        <div className="col-sm-10 input-box">
                            <input
                            onChange={handleOnChange}
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                placeholder="Last Name"
                                name="name"/>
                        </div>
                    </div>
                    <div className="mb-3 row">

                        <div className="col-sm-10 input-box">
                            <input
                            onChange={handleOnChange}
                                type="email"
                                className="form-control"
                                id="staticEmail"
                                placeholder="Email"
                                name="email"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 input-box">
                            <input
                            onChange={handleOnChange}
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="ConfirmPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col-sm-10 input-box">
                            <input
                            onChange={handleOnChange}
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="ConfirmPassword"
                                placeholder="Confirm Password"/>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="form-control bg-primary text-light" type='submit'>Create</button>
                </div>
                <div className="creatTxt">
                    <p>Already have an account?<span onClick={handleLogin} className="creatAccount">Log In</span>
                    </p>
                </div>
                
                </form>
            </div>}
        </div>
    );
};

export default Login;