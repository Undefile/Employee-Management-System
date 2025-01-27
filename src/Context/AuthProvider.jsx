import { useState, useEffect } from "react"
import React,{createContext} from 'react'
import {getLocalStorage}from '../Utils/localStorage'    


export const AuthContext = createContext()
// localStorage.clear();
const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const {employees} = getLocalStorage();
    setUserData(employees)
  }, [])
  

  return (
    <div>
      <AuthContext.Provider value = {[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider