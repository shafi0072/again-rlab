import React, { useState } from 'react';
import './user.css';
import '../../../responsive.css';
import UserForm from './UserForm';

import UserData from './UserData';

const User = (props) => {
   
    const [click, setClick] = useState({
        clickToUser: true,
        clickToFrom:false
    });
    const handleClick = () => {
        const newClick = {...click}
        newClick.clickToFrom = true;
        newClick.clickToUser = false;
        setClick(newClick)
    }
    
    const data = props.data;
    return (
        <div className='mt-5 text-center'>
          {click.clickToUser && <div>
              <div className="user-map">
                    {
                        data.map((data) =>  <UserData  data={data}/>)
                    }
                    <div className="button d-flex justify-content-end">
                <button className="btn btn-dark" onClick={handleClick}>Add User</button>
            </div> 
                </div>
           
           </div>}
            <div>
                {click.clickToFrom && <UserForm/>}
            </div>
        </div>
    );
};

export default User;