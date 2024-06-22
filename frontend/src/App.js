import React from 'react';
import './App.css'; // Import global styles
import TaskList from './TaskList'; // Import the TaskList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;
