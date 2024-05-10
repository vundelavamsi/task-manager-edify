import {React, useState} from 'react'
import './index.css'

function TaskForm({onAddTask}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      dueDate,
      completed: false,
    }
    onAddTask(newTask)

    setTitle('')
    setDescription('')
    setPriority('')
    setDueDate('')
  }

  return (
    <div>
      <h1 className="heading">Task Manager</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="title-input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          style={{borderRadius: '8px'}}
          placeholder="Description"
          cols="40"
          rows="7"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
          className="priority"
          required
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="date"
          className="date"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
          required
        />
        <br />
        <button type="submit" className="submit-button">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
