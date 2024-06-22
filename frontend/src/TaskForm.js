import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/tasks', { title });
        setTitle('');
        fetchTasks();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
