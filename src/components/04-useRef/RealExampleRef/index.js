import React, { useState } from "react";
import MultipleCustomHooks from "../../03-examples/MultipleCustomHooks";

export default function RealExampleRef() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);
  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-warning mt-2" onClick={handleShow}>
        Show/Hide
      </button>
    </div>
  );
}
