import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos }) {
    // const sortedTodos = todos.slice().sort((a, b) => Number(a.done) -Number(b.name));

    return (
        <div className="space-y-2 mt-4">
            {(todos.slice().sort((a, b) => Number(a.done) -Number(b.done))).map((item) => (
              <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}
