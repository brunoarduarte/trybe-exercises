import React from 'react';
import './App.css';

const commits = ['Estudar React', 'Praticar React', 'Descançar do React', 'Almoçar React', 'Assistir React', 'Dormir React'];
const Task = (value) => {
  return (
    <li>{value}</li>
    );
  }
  
function App() {
  return (
    <ol className="App">
      {commits.map(value => Task(value))}
    </ol>
  );
}

export default App;
