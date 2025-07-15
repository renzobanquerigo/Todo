export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    console.log("Deleting item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 border rounded-lg shadow-sm">
      <span onClick={() => setTodos(todos.map((todo) => todo.name === item.name ? {...todo, done: !todo.done} : todo))} className={`${item.done ? "line-through text-gray-800" : ""}`}>{item.name}</span>

    <span className="text-gray-800">
      <button onClick={() => handleDelete(item)} className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"> x </button>
    </span>
    </div>
  );
}
