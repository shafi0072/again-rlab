import React, {useState} from 'react';
import './user.css';
import '../../../responsive.css';
import UserForm from './UserForm';

import UserData from './UserData';

const User = (props) => {

    const [click, setClick] = useState({clickToUser: true, clickToFrom: false});
    const handleClick = () => {
        const newClick = {
            ...click
        }
        newClick.clickToFrom = true;
        newClick.clickToUser = false;
        setClick(newClick)
    }

    const data = props.data;
    return (
        <div className='mt-5 text-center'>
            {
                click.clickToUser && <div>
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
            <div>
                {click.clickToFrom && <UserForm/>}
            </div>
        </div>
    );
};

export default User;