import React from 'react'

const header = () => {
  return (
    <div className='flex items-end justify-between px-5 py-2 '>
      <h1 className='text-2xl text-white font-medium'>Hello <br />
         <span className='text-3xl font-semibold'>Kushal 👋</span>
      </h1>
      <button className='bg-red-600 text-white px-5 py-2 font-medium rounded-sm text-lg'>Log out</button>
    </div>
  )
}

export default header