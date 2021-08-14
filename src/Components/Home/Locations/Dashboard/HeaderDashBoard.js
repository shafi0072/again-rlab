import React from 'react';
import BodyOne from './BodyOne';
import HeaderTop from './HeaderTop';

const HeaderDashBoard = () => {
    return (
        <div className="">
            <HeaderTop/>
            <div className="mt-3">
            <BodyOne/>
            </div>
        </div>
    );
};

export default HeaderDashBoard;