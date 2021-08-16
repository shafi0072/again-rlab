import React from 'react';
import BodyOne from './BodyOne';
import HeaderTop from './HeaderTop';

const HeaderDashBoard = (props) => {
    return (
        <div className="">
            <HeaderTop id={props.id}/>
            <div className="mt-3">
            <BodyOne data={props.data} pastData={props.pastData} lid={props.Lid}/>
            </div>
        </div>
    );
};

export default HeaderDashBoard;