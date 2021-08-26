import React, {useEffect, useState} from 'react';
import './user.css';
import '../../../responsive.css';
import UserForm from './UserForm';

import UserData from './UserData';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

const User = (props) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const [click, setClick] = useState({clickToUser: true, clickToFrom: false});
    const [details, setDetails] = useState(false)
    const handleClick = () => {
        const newClick = {
            ...click
        }
        newClick.clickToFrom = true;
        newClick.clickToUser = false;
        setClick(newClick)
    }
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, []);

    const data = props.data
    const handleDetails = () => {
        const newDetails = true;
        
        setDetails(newDetails)
    }
    return (
        <div className='mt-5 text-center'>
            {
                click.clickToUser && windowDimensions.width >= 720 && <div>
                        <div className="user-map">
                            <div className="d-flex justify-content-center">
                                <table class="content-table">
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Position</th>
                                            <th>Email</th>
                                            <th>UserID</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            data.map((data) => {
                                                return <tr>

                                                    <td>{data.name}</td>
                                                    <td>{data.Role}</td>
                                                    <td>{data.position}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.Uid}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>

                                </table>

                            </div>
                            <button className="btn btn-success" onClick={handleClick}>Add User</button>

                        </div>

                    </div>
            }
            {
                click.clickToUser && windowDimensions.width < 720 && <div>
                    <div className="user-map">
                        <div className="d-flex justify-content-center">
                            <table class="content-table">
                                <thead>
                                
                                    <tr className='text-center'>
                                        <th>Details</th>
                                        {!details && <th>Name</th>}
                                        {!details && <th>Role</th>}
                                    </tr>
                                    
                                </thead>
                                <tbody>

                                    {
                                        data.map((data) => {
                                            return  <tr>
                                               {!details && <ArrowForwardIosIcon onClick={handleDetails}/>}
                                                {!details && <td>{data.name}</td>}
                                                {!details && <td>{data.Role}</td>}
                                              {details && <div
                                                    className="card"
                                                    style={{
                                                        width: '100%'
                                                    }}>

                                                    <div className="card-body">
                                                        <h5 className="card-title">Name: {data.name}</h5>
                                                        <h5 className="card-title">Role: {data.Role}</h5>
                                                        <h5 className="card-title">Position: {data.position}</h5>
                                                        <h5 className="card-title">Email: {data.email}</h5>
                                                        <h5 className="card-title">User Id: {data.Uid}</h5>
                                                    </div>
                                                </div>}
                                            </tr>
                                            
                                        
                                        })
                                    }
                                    </tbody>

                            </table>

                        </div>
                        <button className="btn btn-success" onClick={handleClick}>Add User</button> 

                    </div>
                    </div>
            }
            <div>
                {click.clickToFrom && <UserForm/>}
            </div>
        </div>
    );
};

export default User;