import React from "react";
import { BoardContext } from "./App.js";
// import useContext here 💖

export default function Task({ task }) {
  // Add useContext here 💖

  function handleStatusChange(e) {
    return moveTask(task.id, e.target.value);
  }

  return (
    <div className="task" data-status={task.status}>
      <p>{task.title}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}
