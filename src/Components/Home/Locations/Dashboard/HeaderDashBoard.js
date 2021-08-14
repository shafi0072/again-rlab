import React from 'react';
import BodyOne from './BodyOne';
import HeaderTop from './HeaderTop';

const HeaderDashBoard = (props) => {
    return (
        <div className="">
            <HeaderTop/>
            <div className="mt-3">
            <BodyOne data={props.data} pastData={props.pastData}/>
            </div>
        </div>
    );
};

export default HeaderDashBoard;