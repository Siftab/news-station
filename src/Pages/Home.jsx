import React from 'react';
import Header from '../Components/Header';
import NavBar from '../Components/NavBar';
import Marquee from 'react-fast-marquee';
import RightNavBar from '../Components/RightNavBar';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className=" border p-4 flex">
                <button className='py-2 px-6 bg-[#D72050]  text-white'>Latest</button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <NavBar></NavBar>

            <div className='grid grid-cols-4 gap-6'>
        <div className='border'>left</div>
        <div className='border col-span-2'>midd</div>
        <div className='border'><RightNavBar></RightNavBar></div>
      </div>
        </div>

    );
};

export default Home;