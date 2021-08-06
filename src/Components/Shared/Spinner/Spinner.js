import React from 'react';

const Spinner = () => {
    return (
        <div>
            <div class="spinner-grow text-dark " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark ms-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-dark ms-3" role="status">
                <span class="visually-hidden">Loading...</span>
                
            </div>
            <div class="text-dark ms-3" role="status">
            <p>Loading...</p>   
                
            </div>
            
        </div>
    );
};

export default Spinner;