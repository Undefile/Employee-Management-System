import React from 'react'
import Login from '../Auth/Login'

const header = (props) => {
  // console.log(data)

  const logOut = () => {
    localStorage.removeItem('loggedInUser')
    // localStorage.setItem('loggedInUser','')
    // window.location.reload()
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between px-5 py-3 '>
      <h1 className='text-2xl text-white font-medium'>Hello <br />
         <span className='text-3xl font-semibold'>{props.data?.name}👋</span>
      </h1>
      <button onClick={logOut} className='bg-red-600 text-white px-5 py-2 font-medium rounded-sm text-lg'>Log out</button>
    </div>
  )
}

export default header