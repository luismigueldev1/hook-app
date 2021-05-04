import React from "react";

function Child({ number, increment }) {
  console.log("Me volvi a renderizar :(");
  return (
    <div>
      <button
        className="btn btn-primary me-3 "
        onClick={() => increment(number)}
      >
        {number}
      </button>
    </div>
  );
}

export default React.memo(Child);
