import React from "react";
import PropTypes from "prop-types";
import { useForm } from "../../../hooks/useForm";

function TodoForm({ handleAddTodo }) {
  const [values, handleInputChange, reset] = useForm({
    task: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.task.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      task: values.task,
      done: false,
    };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="task"
          placeholder="New task"
          autoComplete="off"
          value={values.task}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-primary  btn-block mt-2"
        >
          Add New Task
        </button>
      </form>
    </>
  );
}

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
