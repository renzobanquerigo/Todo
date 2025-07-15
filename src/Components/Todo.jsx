import TodoList from './TodoList';
import Form from './Form';

export default function Todo({ todos, setTodos }) {
  return (
    <div className="w-full max-w-xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md mt-6 sm:mt-10">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}