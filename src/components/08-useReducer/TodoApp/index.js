import React, { useEffect, useReducer } from "react";

import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };
    dispatch(action);
  };

  const handleToogle = (id) => {
    dispatch({
      type: "TOOGLE",
      payload: id,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>
        Todo App<small>({todos.length})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-sm-12 col-md-7 mb-2">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToogle={handleToogle}
          />
        </div>

        <div className="col">
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}
