import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div className="flex items-center">
      <p className="text-lg">{todo.text}</p>
      <button
        onClick={toggleTodo}
        className="ml-2 bg-blue-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {todo.completed ? 'Desfazer' : 'Concluído'}
      </button>
      <button
        onClick={removeTodo}
        className="ml-2 bg-red-500 text-white py-1 px-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        Remove
      </button>
    </div>
  );
}

export default TodoItem;

