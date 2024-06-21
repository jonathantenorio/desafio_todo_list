import React from 'react';
import TodoApp from './components/TodoApp';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-blue-400 relative"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 animate-clouds"></div>
      <TodoApp />
      <div className="flex justify-center items-center h-screen"></div>
    </div>
  );
}

export default App;

