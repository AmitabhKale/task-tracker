import React from "react";
import TaskListItem from "./TaskListItem";

type TaskItem = {
  id: number;
  task: string;
  description?: string;
  date: string;
  status: string;
};

const tasks: TaskItem[] = [
  {
    id: 1,
    task: "Play Guitar",
    description: "A Practice Song to sing in public",
    date: "5 December ",
    status: "optional",
  },
  {
    id: 2,
    task: "Play Piano Melody",
    description: "A Practice Song to sing in public",
    date: "9 December ",
    status: "general",
  },
];

function TaskList() {
  return (
    <ul className="list-group my-2">
      {tasks.map((taskItem) => (
        <TaskListItem key={taskItem.id} taskItem={taskItem} />
      ))}
    </ul>
  );
}
export default TaskList;
