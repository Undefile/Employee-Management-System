import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);
//   console.log(authData.employees);

  return (
    <div id="alltask" className="bg-[#2D2D2D] p-4 rounded-lg mt-5">
      <div className="flex justify-between items-center bg-red-400 py-2 px-4 rounded-sm mb-2">
        <h3 className="font-semibold text-lg w-1/5">Employee</h3>
        <h3 className="font-semibold text-lg w-1/5">New </h3>
        <h5 className="font-semibold text-lg w-1/5">Active </h5>
        <h5 className="font-semibold text-lg w-1/5">Completed </h5>
        <h5 className="font-semibold text-lg w-1/5">Failed</h5>
      </div>

      <div className="">
        {userData.map(function (elem,idx) {
          return (
            <div key={idx} className="flex justify-between items-center border-2 border-teal-400 py-2 px-4 rounded mb-2">
              <h3 className="font-medium text-lg w-1/5">{elem.name}</h3>
              <h3 className="font-medium text-lg w-1/5">{elem.taskCount.new_task} </h3>
              <h5 className="font-medium text-lg w-1/5">{elem.taskCount.active} </h5>
              <h5 className="font-medium text-lg w-1/5">{elem.taskCount.complete_task} </h5>
              <h5 className="font-medium text-lg w-1/5">{elem.taskCount.failed_task}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
