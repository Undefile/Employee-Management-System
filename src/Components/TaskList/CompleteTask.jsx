import React from "react";

const CompleteTask = ({data}) => {
  return (
    <div className="h-full w-[300px] bg-red-400 rounded-lg flex-shrink-0 p-5">
      <div className=" flex items-center justify-between  ">
        <h3 className="bg-red-700 rounded font-semibold text-sm px-3 py-1">
          Completed
        </h3>
        <h2 className="text-lg font-semibold">{data.task_date}</h2>
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{data.task_title}</h2>
      <p className="mt-2  text-lg font-light text-white">
        {data.task_description}
      </p>
    </div>
  );
};

export default CompleteTask;
