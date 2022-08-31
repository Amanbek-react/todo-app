import React, { useEffect, useState } from "react";
import "./App.css";
import { TodoType } from "./types/Types";
import { Header } from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import Todo from "./components/todo/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const todo = localStorage.getItem("todo") || "";
  const todoArr = JSON.parse(todo) || [];
  const [state, setState] = useState<TodoType[]>(todoArr);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  const addNewTodo = (str: string) => {
    setState([...state, { text: str, status: false, id: Date.now() }]);
  };

  const deleteTodo = (id: string | number) => {
    const newArr = state.filter((item) => item.id !== id);
    setState(newArr);
  };

  const onCheck = (id: string | number) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setState(newArr);
  };

  const onEditText = (newText: string, id: string | number) => {
    const newArr = state.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });
    setState(newArr);
  };
  return (
    <div className="App">
      <Header state={state} />
      <div className="todo_body">
        <CreateTodo addNew={addNewTodo} stateLength={state.length} />
        <div className="todo_items">
          {state.length ? (
            state.map((item) => (
              <Todo
                key={item.id}
                onDelete={deleteTodo}
                onCheck={onCheck}
                onEditText={onEditText}
                {...item}
              />
            ))
          ) : (
            <h1 className="add-todo">Please add todo</h1>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
