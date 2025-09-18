import React, { useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'
import { useState} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const[userData,setUserData] = useState(null)
    
    
    useEffect(() => {
        setLocalStorage()
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})

    }, [])
  
  
    return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}  
        </AuthContext.Provider>    
    </div>
  )
}

export default AuthProvider