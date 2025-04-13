import { useState } from 'react'

function TodoInput({ onAdd }) {
    const [input , setInput] = useState('');

    const handleAdd = () => {
        if(!input.trim()) return;
        onAdd(input);
        setInput('');
    }
    return (
      <div style={{ display: 'flex',  gap: '8px', marginBottom: '50px' }}>
         <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        placeholder="輸入代辦事項..."
        style={{ flex: 1 }}
      />
    <button onClick={handleAdd}>新增</button>
      </div>  
    )
};

export default TodoInput;