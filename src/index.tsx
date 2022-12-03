import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);
