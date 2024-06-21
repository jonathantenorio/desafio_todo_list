import React from 'react';

function TodoItem({ text, completed, toggleTodo, removeTodo }) {
    return (
      <div className="bg-orange-300 p-4 mb-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2 form-checkbox h-5 w-5 text-blue-600"
            checked={completed}
            onChange={toggleTodo}
          />
          <p className="text-lg">{text}</p>
          <button
            className="ml-auto bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={removeTodo}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }

export default TodoItem;
