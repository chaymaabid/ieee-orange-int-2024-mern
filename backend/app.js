const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
const app = express();
const taskRoutes = require('./routes/tasks');

// Middleware
app.use(cors()); // Use CORS
app.use(express.json());

// Routes
app.use('/ToDoTasks/', taskRoutes);

// Connect to MongoDB
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
