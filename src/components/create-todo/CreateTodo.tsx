import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import "./CreateTodo.css";

interface Props {
  addNew: (val: string) => void;
  stateLength: number; 
}
const CreateTodo: React.FC<Props> = ({ addNew, stateLength }) => {
  const [inputValue, setInputValue] = useState("");

  const submit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (stateLength <= 10) {
      addNew(inputValue);
      setInputValue("");
    } else {
      toast.error("Вы можете создовать максимум 10 элементов.");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Form onSubmit={submit} className="formWrapper">
      <Form.Control
        className="mb-8"
        id="inlineFormInput"
        placeholder="Enter todo here"
        onChange={handleChange}
        value={inputValue}
        required
      />
      <Button type="submit">+Submit</Button>
    </Form>
  );
};

export default CreateTodo;
