import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.email) {
        setUser(currentUser);
      }
      setLoading(false)
    });
    return () => unSubscribe();
  }, []);
//log in system with google
  const loginwithGoogle = (provider) =>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
//creating user using email password
  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  } 

//sign in with email and password
const logIn = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth,email,password);
}

//logOut
const logOut = () =>{
  setLoading(true)
  return signOut(auth);
}
  const authInfo = {
    user,
    loading,
    loginwithGoogle,
    createUser,
    logIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
