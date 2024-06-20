import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
          removeTodo={() => removeTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
