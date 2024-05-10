import React from "react";
import Task from "../Task";

import './index.css'

function TaskList({ tasks, onEditTask, onDeleteTask, onToggleTaskCompletion }) {
  return (
    <div className="task-list-container">
      <ul className="tasks-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onToggleTaskCompletion={onToggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
