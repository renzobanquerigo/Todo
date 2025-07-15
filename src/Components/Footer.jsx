export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="bg-blue-800 text-white text-center p-4 mt-auto">
      <span className="font-bold mr-16">Completed Todos: {completedTodos}</span>
      <span className="font-bold">Total Todos: {totalTodos}</span>
    </div>
  );
}