import { createContext, ReactNode, useState } from "react";

type TaskProviderProps = {
  children: ReactNode;
};

type TaskItem = {
  id: string;
  task: string;
  description?: string;
  date: string;
  status: string;
};

interface ITaskContext {
  tasks: TaskItem[];
  addTask: (newTask: TaskItem) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: "1",
      task: "Play Guitar",
      description: "A Practice Song to sing in public",
      date: "5 December ",
      status: "optional",
    },
    {
      id: "2",
      task: "Meeting Notes",
      description: "Knowledge Transfer of the Last Pending Work",
      date: "9 December ",
      status: "general",
    },
  ]);

  function addTask(newTaskItem: TaskItem) {
    console.log(newTaskItem);
    setTasks([newTaskItem, ...tasks]);
  }

  function deleteTask(id: string) {
    if (window.confirm("Are you sure you want to delete Task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
