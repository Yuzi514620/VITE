
function TodoList({ todos, onToggle, onDelete }) {
    return (
      <ul style={{ padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '6px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
                color: todo.completed ? '#aaa' : '#333',
                fontStyle: todo.completed ? 'italic' : 'normal',
                transition: 'all 0.2s ease-in-out',
                cursor: 'pointer',
            }}
          >
            <span onClick={() => onToggle(todo.id)} style={{textDecoration: todo.completed ? 'line-through' : 'none',}}>{todo.text}</span>
            {todo.completed && (
              <button onClick={() => onDelete(todo.id)}>❌</button>
            )}
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  