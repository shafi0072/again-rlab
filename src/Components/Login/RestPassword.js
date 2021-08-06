import React from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';

const RestPassword = () => {
    const [user, setUser] = useState({
        email:'',
        message:''
    })
    const handleOnChange = (e) => {
        const newUser = {...user}
        newUser[e.target.name] = e.target.value;
        setUser(newUser)
    }
    const handleSubmit =(e) =>  {
        firebase.auth().sendPasswordResetEmail(user.email)
    .then(() => {
      const newUser = {...user}
      newUser.message = 'A verification link was sented on your email check the gmail';
      setUser(newUser)
    })
    .catch((error) => {
      
      // ..
    });
    e.preventDefault()
    }
    return (
        <div className='row d-flex justify-content-center'>
           <div className="col-md-5 mt-5">
           <form action="" onSubmit={handleSubmit}>
                <div className="">
                    <div className="mb-3 row">

                        <div className="col-sm-10 input-box">
                            <input
                                onChange={handleOnChange}
                                type="text"
                                className="form-control"
                                id="staticEmail"
                                name="email"
                                placeholder="email"/>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="form-control bg-primary text-light" type='submit'>Rest Passoword</button>
                    <Link to="/auth">Log in</Link>
                </div>
                </form>
                <p className="text-success">{user.message}</p>
           </div>
        </div>
    );
};

export default RestPassword;