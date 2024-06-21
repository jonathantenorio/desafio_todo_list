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
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="max-w-lg w-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
