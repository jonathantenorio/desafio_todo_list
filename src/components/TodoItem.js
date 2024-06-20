import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li className={`flex justify-between items-center p-2 ${todo.completed ? 'line-through' : ''}`}>
      <span onClick={toggleTodo} className="cursor-pointer">
        {todo.text}
      </span>
      <button onClick={removeTodo} className="ml-4 text-red-500">
        X
      </button>
    </li>
  );
}

export default TodoItem;
