import React, { useRef } from "react";

export default function FocusScreen() {
  const inputRef = useRef();

  const handleClick = (event) => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1> Focus Screen</h1>
      <input
        type="text"
        className="form-control"
        placeholder="Su nombre"
        ref={inputRef}
      />
      <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
}
