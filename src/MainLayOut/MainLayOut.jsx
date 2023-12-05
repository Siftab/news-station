import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className='font-poppin max-w-6xl mx-auto'> 
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;