import React, {useState} from 'react'
import './index.css'

function Task({task, onEditTask, onDeleteTask, onToggleTaskCompletion}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(task.title)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    onEditTask({...task, title: editedTitle})
    setIsEditing(false)
  }

  return (
    <li className="list-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={e => setEditedTitle(e.target.value)}
            className="input-edit"
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
            className='checkbox'
          />
          <span
            style={{textDecoration: task.completed ? 'line-through' : 'none'}}
          >
            <p className='task-title'> {task.title} </p>
            <p> {task.description} </p>
            <div className='info-container'>
              <button className='info-button'> {task.priority} </button>
              <button className='info-button'> {task.dueDate} </button>
            </div>
          </span>
          <div className="button-container">
            <button
              className="button"
              style={{backgroundColor: '#60c42d'}}
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="button"
              style={{backgroundColor: '#c9263c', color: '#ffffff'}}
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default Task
