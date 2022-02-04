import React from "react";

const TodoApp = ({
  TodoList,
  todos,
  toggleTodo,
  todoNameRef,
  handleAddTodo,
  handleClearTodos,
}) => {
  return (
    <div className="Todo">
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
    </div>
  );
};

export default TodoApp;
