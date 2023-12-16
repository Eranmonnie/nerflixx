import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import 
{ createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth'
import { auth, db } from '../services/firebaseServises'
import { useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const[user,setUser] = useState({})

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
        return ()=>{unsubscribe()}
    }, [])

    const signup = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password) 
        setDoc(doc(db, "Users", email),{
        favShows:[],
    })}

    const login = (email, password)=>{signInWithEmailAndPassword(auth, email, password)}

    const logout =()=>{signOut(auth)}

  return <AuthContext.Provider value ={{user, signup, login, logout}}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}