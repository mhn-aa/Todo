import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
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
    <>
      <div className="todolist">
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
      <div className="todos">
        <input className="the_box" ref={todoNameRef} type="text" />
      </div>
      <div className="addtodo">
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="clear">
        <button onClick={handleClearTodos}>Clear Completed</button>
      </div>
      <div className="completed">
        {todos.filter((todo) => !todo.complete).length} left to do
      </div>
    </>
  );
}

export default App;
