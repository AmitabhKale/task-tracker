import React from "react";

type TaskListItemProps = {
  taskItem: {
    id: number;
    task: string;
    description?: string;
    date: string;
    status: string;
  };
};

function TaskListItem({ taskItem }: TaskListItemProps) {
  return (
    <li className="list-group-item">
      <div className={`bg-light`}>
        <div className="card-body">
          <h5 className="card-title">{taskItem.task}</h5>
          <p className="card-text">{taskItem.description}</p>
          <p>{taskItem.date}</p>

          <button className="btn btn-warning">Update</button>
          <button className="mx-2 btn btn-danger">Delete</button>
        </div>
      </div>
    </li>
  );
}

export default TaskListItem;
