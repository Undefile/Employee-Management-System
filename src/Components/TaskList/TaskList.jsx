import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
   // console.log(data)
  return (
    <div id='tasklist' className='flex  py-5 h-[58%] mt-8 flex-nowrap gap-5 overflow-x-auto'>
      {data.tasks.map((elem,idx) => {
        if(elem.new_task){
          return <NewTask key={idx} data={elem}/>
        }
        if(elem.complete_task){
          return <CompleteTask key={idx} data={elem}/>
        }
        if(elem.failed_task){
          return <FailedTask key={idx} data={elem}/>
        }
        if(elem.active){
          return <AcceptTask key={idx} data={elem}/>
         }
      })}
    </div>
  )
}

export default TaskList