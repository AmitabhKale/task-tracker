import React from "react";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 offset-md-3 border">
            <Header title="Task Tracker" />
            <hr />
            <TaskForm />
            <hr />
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
