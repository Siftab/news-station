import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center mt-12  space-y-4'> 
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-[rgb(112,111,111)] text-lg font-semibold '>Journalism Without Fear or Favour</p>
            <p className='text-[rgb(112,111,111)] text-xl font-semibold '>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;