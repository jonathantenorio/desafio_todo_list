import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;

