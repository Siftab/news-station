import  { useContext } from 'react';
import NavBar from '../Components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import {VscEye} from 'react-icons/vsc'
import { useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const navigate=useNavigate();
    const {signIn}=useContext(AuthContext);
    const [visible,setVisible]=useState(true);
    const handleVisible=()=>{
        setVisible(!visible);
    }
  const handleLogin=(e)=>{
    e.preventDefault();
    const form =new FormData(e.currentTarget);
    const email= form.get('email')
    const password= form.get('password')
    console.log(email,password)
    signIn(email,password)
    .then(res=>{ console.log(res.user)
                    navigate('/')})
    .catch(err=> console.log(err))

    
  }
    return (
        <div className='mt-10 '>
         <NavBar></NavBar>

         <div className='w-1/2 border mx-auto p-16'>
            <h1 className='text-4xl font-semibold text-center mb-12'> Login your account</h1>
            <hr />

            <form className=' mt-10 space-y-10 mx-9' onSubmit={handleLogin}>
            <input required type="email" name="email" id="" className='border w-full p-4' placeholder='email ' />
            <div className='relative flex items-center '><input required type={visible? "password":"text"} name="password" id="" className='border w-full p-4' placeholder='password ' /><span className='absolute  right-4' onClick={handleVisible}><VscEye /></span></div>
            <button type="submit" className='w-full p-8 bg-[#403F3F] text-white'>Login</button>
            </form>
            <p className='text-center mt-10'>Dont have a account <Link className='text-red-600 ' to="/register"> Register</Link></p>
            

         </div>
            
        </div>
    );
};

export default Login;