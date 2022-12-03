import { createContext, ReactNode, useState } from "react";

type TaskProviderProps = {
  children: ReactNode;
};

type TaskItem = {
  id: number;
  task: string;
  description?: string;
  date: string;
  status: string;
};

interface ITaskContext {
  tasks: TaskItem[];
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 1,
      task: "Play Guitar",
      description: "A Practice Song to sing in public",
      date: "5 December ",
      status: "optional",
    },
    {
      id: 2,
      task: "Meeting Notes",
      description: "Knowledge Transfer of the Last Pending Work",
      date: "9 December ",
      status: "general",
    },
  ]);
  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;
