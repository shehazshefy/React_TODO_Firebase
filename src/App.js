import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';

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
        {/* <input value={input} onChange={(e) => setInput(e.target.value)}/> */}

        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
      </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          {/* disabled={!input} will disable the button when it is empty!! */}
          Add Todo
        </Button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
