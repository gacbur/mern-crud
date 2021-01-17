import React, { useState } from 'react'
import Axios from 'axios'
import "./App.css"

function App() {

  const [todoText, setTodoText] = useState("")

  const addTodoList = () => {
    Axios.post('http://localhost:3001/insert',
      {
        todoText: todoText
      }
    )
  }

  return (
    <div className="app">
      <h1>Todo list with MERN</h1>

      <label htmlFor="">Text:</label>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={addTodoList}
      >Add to list</button>
    </div>
  );
}

export default App;
