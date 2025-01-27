import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);


  const [taskTitle, setTaskTitle] = useState('')
  const [taskdate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const [newTask, setNewTask] = useState({})
  const [taskCount, setTaskCount] = useState('')

  // const submitHandler = (e) =>{
  //   e.preventDefault();

 

  //   setNewTask({taskTitle, taskdate, category, description, active:true, new_task:true,                  complete_task:false, failed_task:false})

  //   const data = userData;
    
  //   data.forEach(function(elem){
  //     if(assignTo === elem.name){
  //         elem.tasks.push(newTask)
  //         console.log(elem)
  //         elem.taskCount.new_task += 1
  //       }
  //   })

  //   console.log(data)
  // }

  const submitHandler = (e) => {
    e.preventDefault();
  
    const newTask = { taskTitle, taskdate, category, description, active: true, new_task: true, complete_task: false, failed_task: false };
  
    const updatedUserData = userData.map((employee) => {
      if (employee.name === assignTo) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            new_task: employee.taskCount.new_task + 1,
          },
        };
      }
      return employee;
    });
  
    setUserData(updatedUserData);

    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setDescription('')
    setTaskTitle('')

    console.log(updatedUserData);
  };

  return (
    <div className="bg-[#2D2D2D] p-5 rounded-lg mt-5">
      <form onSubmit={(e)=>{submitHandler(e)}}
      className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2">
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="Make UI Design"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Date</h3>
            <input
              value={taskdate}
              onChange={(e)=>{
                setTaskDate(e.target.value
              )}}
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="date"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e)=>{
                setAssignTo(e.target.value)
              }}
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="UI Design, Dev, etc"
              required
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3
          className="text-base text-white-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }} 
            className="text-sm w-full h-44 py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:scale-100 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
