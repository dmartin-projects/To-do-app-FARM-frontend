import axios from "axios";
import React from "react";

function TodoItem(props) {

  const deleteTodoHandler = (_id) => {
    axios
      .delete(`https://to-do-app-farm-backend.herokuapp.com/api/todo/${_id}`)
      .then((res) => console.log(res.data));
  };

  let date = new Date(props.todo.created_at);
  let date2 =`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  
  date = 'created on ' + date2

  if(props.todo.timestamp_updated_at){
      let date = new Date(props.todo.timestamp_updated_at);
     
      date = date.toLocaleString();
      
      date = 'task updated on ' + date
 
  }

      
  return (
    <li class="list-group-item">
     <div class="card">
        <h4 class="card-header">{String(props.todo.title).toUpperCase()}</h4>
        <div class="card-body">
          <p class="card-text">{props.todo.description}</p>
          <p class="text-muted">{date}</p>
          
          <button
          onClick={() => deleteTodoHandler(props.todo._id)}
          className="border-0 btn-transition btn btn-outline-danger"
        >
          <i class="fa fa-trash"></i>{" "}
        </button>
          <button
          onClick={() => deleteTodoHandler(props.todo._id)}
          className="border-0 btn-transition btn btn-outline-success"
        >
          <i class="fa fa-edit"></i>{" "}
        </button>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;

