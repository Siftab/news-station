import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Q1 from '../assets/qZone1.png'
import Q2 from '../assets/qZone2.png'
import Q3 from '../assets/qZone3.png'

const RightNavBar = () => {
    return (
        <div className='p-2'>
            <div className='space-y-4'>
                <h1>Login With</h1>
                <button className='flex w-full items-center btn btn-outline'><FaGithub /> Gihub</button>
                <button className='flex w-full items-center btn btn-outline'><FaGoogle />
Google</button>
            </div>
            <div className='mt-10'>
                <h1 className='mb-5'> Find Us On</h1>
                <div className='flex items-center gap-3  border rounded-t-lg p-4'><FaFacebookF /> FaceBook</div>
                <div className='flex items-center gap-3  p-4 border-x'><FaTwitter /> Twitter</div>
                <div className='flex items-center gap-3  p-4 border rounded-b-lg'> <FaInstagram />Instagram</div>
            </div>

            <div className='bg-[#F3F3F3] mt-5 p-4 space-y-5'>
                <h1 className='mb-4'>Q-Zone</h1>
                <div><img src={Q1} alt="" /></div>
                <div><img src={Q2} alt="" /></div>
                <div><img src={Q3} alt="" /></div>
            </div>
            
        </div>
    );
};

export default RightNavBar;
