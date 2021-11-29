import React, { useState, useEffect } from "react";
import "./App.css";
import TodoView from "./components/TodoListView";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todoList, setTodoList] = useState([{}]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Read all todos
  useEffect(() => {
    axios
      .get("https://to-do-app-farm-backend.herokuapp.com/api/todo")
      .then((res) => {
        setTodoList(res.data);
      });
  });

  // Post a todo
  const addTodoHandler = (e) => {

    axios
      .post("https://to-do-app-farm-backend.herokuapp.com/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) =>console.log(res));
  
  };

  return (
    <div
      className=" col-md-5 list-group-item  justify-content-center align-items-center mx-auto"
    >
      <h1>What's the Plan for Today?</h1>
      <div className="card-body ">

        <span className="card-text">
          <input
            className="mb-2 form-control titleIn"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
          <input
            className="mb-2 form-control desIn"
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Description"
          />
              <div class="col d-flex justify-content-center mb-3">
                <button className="glow-on-hover" onClick={addTodoHandler}>Add Task</button>

              </div>
        </span>

        
        <div>
          <TodoView todoList={todoList} />
        </div>
      </div>
      
    </div>
  );
}

export default App;

// HACER UN CAMBIO EN EL DISEÑO
