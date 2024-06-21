import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="relative min-h-screen bg-blue-200">
      <div className="absolute inset-0 z-0">
        <div className="h-full grid grid-cols-3 gap-4">
          <div className="col-span-1 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat animate-cloud opacity-80"
              style={{ backgroundImage: 'url(/cloud.png)' }}
            ></div>
          </div>
          <div className="col-span-1 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat animate-cloud opacity-90"
              style={{ backgroundImage: 'url(/cloud.png)' }}
            ></div>
          </div>
          <div className="col-span-1 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-no-repeat animate-cloud opacity-100"
              style={{ backgroundImage: '(/cloud.png)' }}
            ></div>
          </div>
        </div>
      </div>

    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tarefas</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;