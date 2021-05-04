import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todos, handleDelete, handleToogle }) {
  return (
    <ul className="p-0 list-group ">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToogle: PropTypes.func.isRequired,
};

export default TodoList;
