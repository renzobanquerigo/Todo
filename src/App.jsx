import { useState } from 'react';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <Todo todos={todos} setTodos={setTodos} />
      <Footer completedTodos={todos.filter((todo) => todo.done).length} totalTodos={todos.length} />
    </div>
  );
}

export default App
