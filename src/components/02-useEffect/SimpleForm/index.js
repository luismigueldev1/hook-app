import React, { useEffect, useState } from "react";
import Message from "../Message";
import "./index.css";

export default function SimpleForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey");
  }, []);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = ({ preventDefault }) => {
    preventDefault();
    console.log(formState);
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Tu email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </div>
      </form>

      {name === "123" && <Message />}
    </>
  );
}
