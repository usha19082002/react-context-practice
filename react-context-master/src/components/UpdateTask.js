import React,{useContext, useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form  from 'react-bootstrap/Form';
import { TaskContext } from "../context/taskContext";
import TasksList from "./TasksList";

const MyVerticallyCenteredModal = (props) => {
  const {state,dispatch} = useContext(TaskContext)
  const {selectedTask} = state
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [id,setId] = useState(0)

    useEffect(()=>{
      if(selectedTask && Object.values(selectedTask).length !== 0)
      setTitle(selectedTask.title)
      setDescription(selectedTask.description)
      setId(selectedTask.id)

    },[selectedTask])
    const updateTask = (task) => {
        props.onHide()
        dispatch({type:"UPDATE_TASK",payload:{title,description,id}})
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
            <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
              Update Task
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
