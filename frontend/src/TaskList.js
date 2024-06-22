import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';
import TaskForm from './TaskForm';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('/tasks');
        setTasks(response.data);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <TaskForm fetchTasks={fetchTasks} />
            <ul>
                {tasks.map(task => (
                    <Task key={task._id} task={task} fetchTasks={fetchTasks} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
