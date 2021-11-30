import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function TodoItem(props) {

  const [title2, setTitle2] = useState("");
  const [desc2, setDesc2] = useState("");
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTodoHandler = (_id) => {
    axios
      .delete(`https://to-do-app-farm-backend.herokuapp.com/api/todo/${_id}`)
      .then((res) => console.log(res.data));
  };

  async function sendData(_id,e){

    if(desc2==""){
      handleClose();
    }else{

      await axios
        .put(`https://to-do-app-farm-backend.herokuapp.com/api/todo/${_id}/?desc=${desc2}`)
        .then((res) =>{
          console.log(res);
              if (res){
                handleClose();
              }
        });

    }
  };


  let date = new Date(props.todo.created_at);
  let date2 =`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  
  date = 'created on ' + date2

  return (
    <li className="list-group-item">
     <div className="card">
        <h4 className="card-header">{String(props.todo.title).toUpperCase()}</h4>
        <div className="card-body">
          <p className="card-text">{props.todo.description}</p>
          <p className="text-muted">{date}</p>
          
          <button
          onClick={() => deleteTodoHandler(props.todo._id)}
          className="border-0 btn-transition btn btn-outline-danger"
        >
          <i className="fa fa-trash"></i>{" "}
        </button>
          <button
          onClick={handleShow}
          className="border-0 btn-transition btn btn-outline-success"
        >
          <i className="fa fa-edit"></i>{" "}
        </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form>
            Title <h4>{props.todo.title}</h4>
                <br/>
            <Form.Group>
                <Form.Label>New Description</Form.Label>
                <Form.Control
                type="text"
                placeholder={props.todo.description}
                value={desc2}
                onChange={(e) => setDesc2(e.target.value)}
                />
            
            </Form.Group>

            <Button className="glow-on-hover" onClick={(e) => sendData(props.todo._id)}>
                enviar
            </Button>

        </Form>
        </Modal.Body>
      </Modal>
        
      
    </li>
  );
}

export default TodoItem;

