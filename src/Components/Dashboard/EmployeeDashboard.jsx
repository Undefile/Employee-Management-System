import React from 'react'
import Header from '../others/header'
import TaskNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className='p-7 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskNumbers  data = {props.data} />
      <TaskList data = {props.data} />
    </div>
  )
}

export default EmployeeDashboard