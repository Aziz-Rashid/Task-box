import React from 'react';
import './App.css';
import TaskContainer from './Components/index';

function App() {
  const task = [
    { title: 'task1', done: true ,},
    { title: 'task2', done: false ,},
    { title: 'task3', done: false ,},
    { title: 'task4', done: false ,},
  ]
  return (
    <div className="App"> 
    <h1>Task Box!</h1>
      <TaskContainer tasks={task}  />
    </div>
  );
}

export default App;