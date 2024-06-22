const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/ToDoTasks/tasks', TaskController.getAllTasks);
router.post('/ToDoTasks/tasks', TaskController.createTask);
router.put('/ToDoTasks/tasks/:id', TaskController.updateTask);
router.delete('/tasks/:id', TaskController.deleteTask);

module.exports = router;
