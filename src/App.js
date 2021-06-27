import React, { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the garbage out', 'Hello everyone']);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    //this will be executed when we click the button
    // console.log('👽', 'working');
    e.preventDefault(); //will prevent REFRESH
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello 🚀</h1>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' onClick={addTodo}>Add Todo</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
