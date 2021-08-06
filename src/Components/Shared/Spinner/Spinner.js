import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div className="spinner-grow text-dark " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark ms-3" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark ms-3" role="status">
                <span className="visually-hidden">Loading...</span>
                
            </div>
            <div className="text-dark ms-3" role="status">
            <p>Loading...</p>   
                
            </div>
            
        </div>
    );
};

export default Spinner;