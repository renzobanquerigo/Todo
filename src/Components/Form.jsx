import { useState } from 'react';

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({name: "", done: false});

  return (
    <form onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, todo]);
          setTodo({name: "", done: false});
      }}
        className="flex flex-col sm:flex-row items-center gap-3 mb-6"
    >
        <input
            type="text"
            value={todo.name}
            placeholder="Add a new todo..."
            onChange={(e) => setTodo({name: e.target.value, done: false})} 
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Add</button>
      </form>
  );
}
