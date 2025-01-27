import React from 'react'

const TaskNumbers = ({data}) => {
  return (
    <div className='text-white flex  justify-between gap-5 mt-10 '>
      <div className=' w-[45%] py-5 px-10 rounded-xl bg-red-400'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.new_task}</h2>
         <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className=' w-[45%] py-5 px-10 rounded-xl bg-blue-400'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.complete_task}</h2>
         <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className=' w-[45%] py-5 px-10 rounded-xl bg-green-400'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.failed_task}</h2>
         <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

      <div className=' w-[45%] py-5 px-10 rounded-xl bg-yellow-400'>
         <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
         <h3 className='text-xl font-medium'>Remaining Task</h3>
      </div>
    </div>
  )
}

export default TaskNumbers