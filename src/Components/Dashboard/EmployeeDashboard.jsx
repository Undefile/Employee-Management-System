import React from 'react'
import Header from '../others/header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-7 bg-[#1C1C1C] h-screen'>
      <Header />
      <TaskNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard