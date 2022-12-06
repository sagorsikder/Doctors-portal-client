import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const login = (email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{

        setLoading(true)
       return signOut(auth)
        
    }
    



    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser=>{

            setUser(currentUser)
            setLoading (false)
            console.log(currentUser)
        })
        return ()=>unsubscribe();
    },[])


    const authInfo = {
        createUser,
        login,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
  {children}
        </AuthContext.Provider>
          
       
    );
};

export default AuthProvider;