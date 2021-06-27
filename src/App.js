import React, { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import { db } from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the db and fetch new todos as they get added/removed
  // Listens to the db and fetch the text and set it to todos state when app starts.Whenever the snapshot changes, its sent to the app
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id ,todoo: doc.data().text})))
      // console.log('id--',snapshot.docs.map(doc => doc.id));
      // console.log('text--',snapshot.docs.map(doc => doc.data().text));
    })
  }, [])

//this will be executed when we click the button
  const addTodo = (e) => {
    e.preventDefault(); //will prevent REFRESH
    db.collection('todos').add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //since this is not positioned properly in db, we take timestamp of firebase server

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>The Notes App!! 📚</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write anything here</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        {/* disabled={!input} will disable the button when it is empty!! */}
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          POST
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
