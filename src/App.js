import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./App.css"

function App() {

  const [todoText, setTodoText] = useState("")
  const [allTodos, setAllTodos] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/read')
      .then((response) => { setAllTodos(response.data) })
  }, [])

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
      >Add to list</button><br /><br />
      <h1>List:</h1>
      {allTodos.map(item => {
        return (
          <div key={item._id}><h4>{item.text}</h4></div>
        )
      })}
    </div>
  );
}

export default App;
