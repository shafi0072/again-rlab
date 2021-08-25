import React, { useEffect, useState } from 'react';
import './user.css'
import db from '../../FirebaseConfig/Firebase'


const UserForm = () => {
    const [userInfo, setuserInfo] = useState({
        email:'',
        name:'',
        position:'',
        Role:'admin',
        Uid:'',
    });
    const [error, setError] = useState({
        notError: true
    })
    const [userUpdate, setUserUpdate] = useState([])
    const handleOnchange = (event) => {
        const newUserInfo = {...userInfo};
        newUserInfo[event.target.name] = event.target.value;
        const RandomId = Math.random() * 100000000000000000000000000000000000000;
        newUserInfo.Uid = RandomId;
        setuserInfo(newUserInfo)
    }
    const handleOnChangeSelect = (event) => {
        setuserInfo({Role: event.target.value})
    };
    const handleSubmit = (e) => {
        db.collection("user").add(userInfo)
        .then((docRef) => {
           
        })
        .catch((error) => {
            
        });
        e.preventDefault();
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
                const functionalArray = arrayFunc(getDataFirebase, userInfo.email);
                setUserUpdate(functionalArray);
            }
        });
        return userDb;
    },[userInfo]);
    useEffect(() => {
        if(userUpdate.email === userInfo.email){
            const newError = {...error}
            newError.notError = false;
            setError(newError)
        }
        else if(userUpdate.email !== userInfo.email){
            const newError = {...error}
            newError.notError = true;
            setError(newError)
        }
    }, [userInfo, userUpdate,error])
    
    return (
        <div style={{width:'50%', margin:'2% auto'}} className='text-center'>
            <form action="" onSubmit={handleSubmit}>
            <div className='d-flex justiy-content-around mb-4' >
                    <label htmlFor="Role"  className='me-5  text-dark interface-name'><h5>Role</h5></label>
                    <select id="role" className='form-control' onChange={handleOnChangeSelect}>
                        <option value="admin" >Admin</option>
                        <option value="oparetors">Oparetors</option>
                        <option value="viewers">Viewers</option>
                    </select>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="userEmail"  className='me-5 text-dark interface-name'><h5>Email</h5></label>
                    <input type="email" id='userEmail' className='form-control' placeholder='Enter Your Email' name="email" onChange={handleOnchange}/>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="name" className='me-5 text-dark interface-name'><h5>Name</h5></label>
                    <input type="text" id='name' placeholder='Enter Your Name' className='form-control' name="name" onChange={handleOnchange}/>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="position"  className='me-5 text-dark interface-name'><h5>Position</h5></label>
                    <input type="text" id='position' placeholder='Enter Your position' className='form-control' name="position" onChange={handleOnchange}/>
                </div>
                {error.notError && <button className="btn btn-success create-button" type="submit">Create/Save</button>}
                {error.notError===false && <p className="text-danger">This email user Already created. please try with another email.</p>}
            </form>
        </div>
    );
};

export default UserForm;