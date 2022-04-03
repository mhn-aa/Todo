import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
import TodoApp from "./Components/TodoApp";
import Links from "./Components/Links";
import SnakeGame from "./Components/SnakeGame";
import PacificStone from "./Components/PacificStone";

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
      <Links />
      <Switch>
        <Route path="/TodoApp">
          <TodoApp
            toggleTodo={toggleTodo}
            handleAddTodo={handleAddTodo}
            handleClearTodos={handleClearTodos}
            TodoList={TodoList}
            todos={todos}
            toggleTodo={toggleTodo}
            todoNameRef={todoNameRef}
          />
        </Route>
        <Route path="/SnakeGame">
          <SnakeGame />
        </Route>
        <Route path="/PacificStone">
          <PacificStone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
