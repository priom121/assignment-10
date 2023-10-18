import { createContext,  useEffect,  useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Hook/firebase.config";

export const AuthContext =createContext(null);
const auth = getAuth(app)
const AuthProVider = ({children}) => {
 const[user,setUser]=useState(null)

// email and password
const register = (email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
       
}

// logIn
const logIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// google log in

const provider = new GoogleAuthProvider()
const googleLogIn =()=>{
   return signInWithPopup(auth,provider)
   

}

// signOut
const logOut =()=>{
   return signOut(auth)
}
useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
               console.log(currentUser);
               setUser(currentUser);

       }) 
       return ()=>{
         unSubscribe () 
       }                     
},[])

const authInfo ={
 user,register,logIn,logOut,googleLogIn
}


return (
<AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
 );
};

export default AuthProVider;