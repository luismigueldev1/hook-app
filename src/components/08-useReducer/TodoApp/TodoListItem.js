import React from "react";
import PropTypes from "prop-types";

function TodoListItem({ todo, handleDelete, handleToogle }) {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <p className="m-0">{todo.done ? <del>{todo.task}</del> : todo.task}</p>
      <div className="buttons">
        <button
          className={`btn btn-sm  ${
            todo.done ? " btn-warning" : " btn-primary"
          }`}
          onClick={() => handleToogle(todo.id)}
        >
          {todo.done}
          {todo.done ? "Pending" : "Done"}
        </button>

        <button
          className="btn btn-sm btn-danger ml-2"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToogle: PropTypes.func.isRequired,
};

export default TodoListItem;
