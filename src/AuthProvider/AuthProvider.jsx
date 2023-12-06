import PropTypes from "prop-types"
import { useState } from 'react';
import { createContext } from 'react';
import {auth}   from '../Firebase.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from 'react';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }
    const LogOut=()=>{
       return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>unSubscribe();
    },[])



 const authInfo={user,createUser,signIn,LogOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children: PropTypes.object,
}