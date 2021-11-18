import axios from "axios";
import React from "react";

function TodoItem(props) {
  const deleteTodoHandler = (_id) => {
    axios
      .delete(`https://to-do-app-farm-backend.herokuapp.com/api/todo/${_id}`)
      .then((res) => console.log(res.data));
  };
  let date = new Date(props.todo.created_at);
  console.log(date);
  date = date.toLocaleString();

  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold, underline" }}>
          {props.todo.title} :{date}
        </span>{" "}
        {props.todo.description}
        <button
          onClick={() => deleteTodoHandler(props.todo._id)}
          className="btn btn-outline-danger my-2 mx-2"
          style={{ borderRadius: "50px" }}
        >
          X
        </button>
        <hr></hr>
      </p>
    </div>
  );
}

export default TodoItem;
