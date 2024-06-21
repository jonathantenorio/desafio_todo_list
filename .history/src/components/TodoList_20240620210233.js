import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="mb-4 bg-orange-400 rounded-lg shadow-md p-4">
          <TodoItem
            todo={todo}
            toggleTodo={() => toggleTodo(index)}
            removeTodo={() => removeTodo(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
