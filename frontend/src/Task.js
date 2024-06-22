import React from 'react';
import axios from 'axios';

const Task = ({ task, fetchTasks }) => {
    const toggleComplete = async () => {
        await axios.put(`/tasks/${task._id}`, { completed: !task.completed });
        fetchTasks();
    };

    const deleteTask = async () => {
        await axios.delete(`/tasks/${task._id}`);
        fetchTasks();
    };

    return (
        <li>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </span>
            <button onClick={toggleComplete}>
                {task.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button onClick={deleteTask}>Delete</button>
        </li>
    );
};

export default Task;
