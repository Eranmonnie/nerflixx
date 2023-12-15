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

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const[user,setUser] = useState({})

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{setUser(currentUser)})
        return ()=>{unsubscribe()}
    }, [])

    const signup = (email, password)=>{createUserWithEmailAndPassword(auth, email, password)}

    const login = (email, password)=>{signInWithEmailAndPassword(auth)}

    const logout =()=>{signOut(auth, email, password)}

  return <AuthContext.Provider value ={{user, signup, login, logout}}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}