import React, {useEffect, useState, useContext} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'


const App = () => {

  //for localStorage
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // },)

  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
    } else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
    } else {
      alert('Invalid email or password!')
    }
  }
  
  const data  = useContext(AuthContext)

  return (
    // <div className='text-center text-xl font-semibold'>Hello World!</div>
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App