import React, { FormEvent, useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const { addTask } = useContext(TaskContext);

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    const newTaskItem = {
      id: uuidv4(),
      task,
      description,
      status: priority,
      date,
    };

    addTask(newTaskItem);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <input
            className="form-control"
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-between mb-5">
          <div className="form-control ">
            <select
              className="form-select"
              value={priority}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
              required
            >
              <option value="General">General</option>
              <option value="Priority">Priority</option>
              <option value="Optional">Optional</option>
            </select>
          </div>
          <div className="form-control">
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="form-control"
              type="datetime-local"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">
          Save Task
        </button>
      </form>
    </>
  );
}

export default TaskForm;
