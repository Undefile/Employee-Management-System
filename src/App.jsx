import React, {useEffect, useState, useContext} from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'


const App = ({}) => {

  // localStorage.clear();
  // for localStorage
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      // console.log('User Logged In');
    }
 
  }, [])
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminData = JSON.parse(localStorage.getItem('admin'));
      const admin = adminData.find((a) => a.email === email);
      if (admin) {
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin',data: admin }));
        setUser('admin');
        setLoggedInUserData(admin);
      }
    } else if (userData) {
      const employee = userData.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data: employee }));
      }
    } else {
      alert('Invalid email or password!');
    }
  };

    // Render components based on user role
    if (!user) {
      return <Login handleLogin={handleLogin} />;
    }
  
    if (user === 'admin') {
      return <AdminDashboard changeUser={setUser} data={loggedInUserData}/>;
    }
  
    if (user === 'employee') {
      return <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />;
    }
  
    return null;  // In case the role doesn't match anything
  
}

export default App