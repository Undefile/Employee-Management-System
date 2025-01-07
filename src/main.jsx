import React from "react";
import ReactDOM from "react-dom/client";
import AuthContext from "./Context/AuthContext";
import TaskContext from "./Context/TaskContext";
import "./index.css";
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <TaskContext>
        <App />
      </TaskContext>
    </AuthContext>
  </React.StrictMode>
);
