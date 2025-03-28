import { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = {
      id: Date.now(),
      text: text,
      completed: false,
    }
    setTodos([...todos, newTodos]);
  }

  return (
    <div style={{ maxWidth: 400, margin: '20px'}}>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
