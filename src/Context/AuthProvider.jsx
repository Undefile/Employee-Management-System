import React,{createContext} from 'react'

  export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  return (
    <div>
      <AuthContext.Provider value = "Kushal">
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider