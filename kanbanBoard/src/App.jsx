import React from "react";
import Column from "./Column";
import Task from "./Task";
// Add imports here 💖
import {useState, useEffect, useContext} from "react"
import "./styles.css";

// Declare context here 💖
export const BoardContext = createContext()

const TaskBoardProvider = function () {
  // Add useState here 💖
  const [tasks, setTasks] = useState(["id", "title", "status"])
  const [status, setStatus] = useState(null)

  const moveTask = function (taskId, newStatus) {
    const updatedTasks = tasks.map(function (task) {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // add useEffect here 💖

  return {
    /* Add context provider wrapper here 💖 */
  };
};

const Board = function () {
  // add useContext here 💖

  return (
    <div className="board">
      <Column
        title="To Do 🪄"
        tasks={tasks.filter(function (task) {
          return task.status === "todo";
        })}
      />
      <Column
        title="In Progress 🚀"
        tasks={tasks.filter(function (task) {
          return task.status === "inProgress";
        })}
      />
      <Column
        title="Done 🌟"
        tasks={tasks.filter(function (task) {
          return task.status === "done";
        })}
      />
    </div>
  );
};

export default function App() {
  return <div className="App">{/* Add TaskBoardProvider here 💖  */}</div>;
}
