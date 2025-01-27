import React from "react";
import Header from "../others/header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-7 bg-[#1C1C1C] ">
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
