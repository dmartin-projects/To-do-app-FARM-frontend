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
  const addTodoHandler = () => {
    axios
      .post("https://to-do-app-farm-backend.herokuapp.com/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) => console.log(res));
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

{
  /* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

<div class="container">
<div class="mt-5">

      <div class="d-style btn btn-brc-tp border-2 bgc-white btn-outline-blue btn-h-outline-blue btn-a-outline-blue w-100 my-2 py-3 shadow-sm">
        <!-- Basic Plan -->
        <div class="row align-items-center">
          <div class="col-12 col-md-4">
            <h4 class="pt-3 text-170 text-600 text-primary-d1 letter-spacing">
              Basic Plan
            </h4>

            <div class="text-secondary-d1 text-120">
              <span class="ml-n15 align-text-bottom">$</span><span class="text-180">10</span> / month
            </div>
          </div>

          <ul class="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
            <li>
              <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
              <span>
                <span class="text-110">Donec id elit.</span>
              Fusce dapibus...
              </span>
            </li>

            <li class="mt-25">
              <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
              <span class="text-110">
                Placerat duis
            </span>
            </li>

            <li class="mt-25">
              <i class="fa fa-times text-danger-m3 text-110 mr-25 mt-1"></i>
              <span class="text-110">
                Tortor mauris
            </span>
            </li>
          </ul>

          <div class="col-12 col-md-4 text-center">
            <a href="#" class="f-n-hover btn btn-info btn-raised px-4 py-25 w-75 text-600">Get Started</a>
          </div>
        </div>

      </div>

      </div>
    </div>
</div> */
}
