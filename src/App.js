import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
import TodoApp from "./Components/TodoApp";
import { Link } from "react-router-dom";
import "./App.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <Router>
      <div className="mhn">
        <h1>MHN</h1>
        <p>
          They call me Mahan. This probably will be my portfolio. I am trying to
          consider a link for my Todo project below. In other words, with
          allocating a box for it and by clicking on it, you will be directed to
          TodoApp. #learning_react.
        </p>
      </div>
      {/* <button>Todo</button> */}
      <Switch>
        <Route path="/TodoApp"></Route>
        <TodoApp
          toggleTodo={toggleTodo}
          handleAddTodo={handleAddTodo}
          handleClearTodos={handleClearTodos}
          TodoList={TodoList}
          todos={todos}
          toggleTodo={toggleTodo}
          todoNameRef={todoNameRef}
        />
      </Switch>
    </Router>
  );
}

export default App;
