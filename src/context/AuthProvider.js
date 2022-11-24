import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase';


export const AuthContext= createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user , setUser]= useState(null);
    const [loading , setLoading] = useState(true);
  console.log(user)
   
    const signIN = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth , provider)

   }
   const createUser= (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth , email,password)
   }
   const LogIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   
   const LogOut = () =>{
    setLoading(true)
    return signOut(auth)
   }
 

   useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth , (currentUser)=>{
       setUser(currentUser)
       setLoading(false);
    })
    return ()=> {
        unsubscribe();
    }
   }, [])


    const authInfo = {user , signIN , LogOut , createUser , LogIn , loading };
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;