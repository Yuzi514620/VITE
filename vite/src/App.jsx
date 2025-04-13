import { useState , useEffect , useRef} from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text) => {
    const newTodos = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos([...todos, newTodos]);
  }

  const toggleTodo = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };
  const deleteTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };
  return (
    <div style={{ maxWidth: 400, margin: '20px'}}>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
