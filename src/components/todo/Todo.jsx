import { useState } from "react";
import "./Todo.css";
import { Button, Form, Col } from "react-bootstrap";

const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inpVal, setInpVal] = useState(props.text);

  const onDelete = () => {
    props.onDelete(props.id);
  };

  const handleCheck = () => {
    props.onCheck(props.id);
  };

  const onEdit = () => {
    setIsEdit(!isEdit);
  };

  const editSubmit = (e) => {
    e.preventDefault();
    props.onEditText(inpVal, props.id);
    setIsEdit(false);
  };

  return (
    <div className="todoWrapper">
      {isEdit ? (
        <form onSubmit={editSubmit} className="formWrapper">
          <Form.Control
            className="mb-8"
            id="inlineFormInput"
            placeholder="Enter todo here"
            onChange={(e) => setInpVal(e.target.value)}
            value={inpVal}
            required
          />
          <Button type="submit">+Submit</Button>
        </form>
      ) : (
        <div className="todo-text">
          <input
            checked={props.status}
            onChange={handleCheck}
            type="checkbox"
          />
          <span className={props.status ? "checked" : ""}>{props.text}</span>
        </div>
      )}
      <Col xs="3">
        <Button onClick={onEdit} variant="success">
          Edit
        </Button>
        <Button onClick={onDelete} variant="danger" className="delete">
          Del
        </Button>
      </Col>
    </div>
  );
};

export default Todo;
