import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "./App.css"

function App() {

  const [todoText, setTodoText] = useState("")
  const [newTodoText, setNewTodoText] = useState("")
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

  const updateFood = (id) => {
    Axios.put("http://localhost:3001/update",
      {
        id: id,
        newTodoText: newTodoText
      })
  }

  const deleteText = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
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
      <ul>
        {allTodos.map(item => {
          return (
            <li key={item._id}>
              <h5>{item.text}</h5>
              <input
                type="text"
                placeholder="update text..."
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
              />
              <button
                onClick={() => updateFood(item._id)}
              >
                Update
                </button>
              <br />
              <button
                className="cart-item__btn"
                onClick={() => deleteText(item._id)}
              >
                Delete
                </button>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
