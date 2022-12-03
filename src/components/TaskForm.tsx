import React from "react";

function TaskForm() {
  return (
    <>
      <form>
        <div className="mb-2">
          <input className="form-control" type="text" placeholder="Task" />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Description"
          />
        </div>
        <div className="d-flex justify-content-between mb-5">
          <div className="form-control ">
            <select className="form-select">
              <option value="1">General</option>
              <option value="2">Priority</option>
              <option value="3">Optional</option>
            </select>
          </div>
          <div className="form-control">
            <input className="form-control" type="datetime-local" />
          </div>
        </div>
        <button className="btn btn-secondary">Save Task</button>
      </form>
    </>
  );
}

export default TaskForm;
