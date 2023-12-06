import React from 'react';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

    const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const handleRegister=e=>{
     e.preventDefault()

        const formData=new FormData(e.currentTarget);
        const email = formData.get('email');
        const passWord= formData.get('password');
        createUser(email,passWord)
        .then(res=>{console.log('user created succesfully',user)})
        .catch(err=>console.log(err))
    }
    return (
        <div className='mt-10 '>
            <NavBar></NavBar>

            <div className='w-1/2 border mx-auto p-16'>
                <h1 className='text-4xl font-semibold text-center mb-12'> Register your account</h1>
                <hr />

                <form className=' mt-10 space-y-10 mx-9' onSubmit={handleRegister}>
                    <input required type="text" name="name" id="" className='border w-full p-4' placeholder=' Enter Name ' />
                    <input type="text" name="image" id="" className='border w-full p-4' placeholder='Image URL ' />
                    <input required type="email" name="email" id="" className='border w-full p-4' placeholder='email ' />
                    <input required type="password" name="password" id="" className='border w-full p-4' placeholder='password ' />
                    <button type="submit" className='w-full p-8 bg-[#403F3F] text-white'>Register</button>
                </form>
                <p className='text-center mt-10'>Already have a account <Link className='text-red-600 ' to="/login"> Login</Link></p>

            </div>

        </div>
    );
};

export default Register;