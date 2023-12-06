import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const {user}=useContext(AuthContext);
    console.log(location)

    return user? children:
    <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;