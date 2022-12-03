import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";
import TaskListItem from "./TaskListItem";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <ul className="list-group my-2">
      {tasks.map((taskItem) => (
        <TaskListItem key={taskItem.id} taskItem={taskItem} />
      ))}
    </ul>
  );
}
export default TaskList;
