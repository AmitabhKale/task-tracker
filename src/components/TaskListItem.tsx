import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

type TaskListItemProps = {
  taskItem: {
    id: string;
    task: string;
    description?: string;
    date: string;
    status: string;
  };
};

function TaskListItem({ taskItem }: TaskListItemProps) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <li className="list-group-item">
      <div className={`bg-light`}>
        <div className="card-body">
          <h5 className="card-title">{taskItem.task}</h5>
          <p className="card-text">{taskItem.description}</p>
          <p>{taskItem.date}</p>

          <button className="btn btn-warning">Update</button>
          <button
            onClick={() => {
              deleteTask(taskItem.id);
            }}
            className="mx-2 btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
