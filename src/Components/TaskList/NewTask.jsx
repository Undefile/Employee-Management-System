import React from "react";

const NewTask = ({data}) => {
  console.log(data.task_title);
  return (
    <div className="h-full w-[300px] bg-green-400 rounded-lg flex-shrink-0 p-5">
      <div className=" flex items-center justify-between  ">
        <h3 className="bg-red-700 rounded font-semibold text-sm px-3 py-1">
          New
        </h3>
        <h2 className="text-lg font-semibold">{data.task_date}</h2>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.task_title}</h2>
      <p className="mt-2 text-lg font-light text-white">
        {data.task_description} 
      </p>
      <div className="flex justify-between mt-3">
         <button className=" bg-green-600 px-2 py-1 text-sm rounded">Mark as Completed</button>
         <button className=" bg-red-600 px-2 py-1 text-sm rounded">Mark as Failed</button>
      </div>
      <div className=" flex items-center justify-center mt-1">
         <button className="w-full bg-cyan-600 px-2 py-1 text-sm rounded">Accept the task</button>
      </div>
    </div>
  );
};

export default NewTask;
