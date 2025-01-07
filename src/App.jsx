import React, {useEffect} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'


const App = () => {

  //for localStorage
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  },)
  

  return (
    // <div className='text-center text-xl font-semibold'>Hello World!</div>
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App