import React, { useState } from "react";
import { useCounter } from "../../../hooks/useCounter";
import Small from "../Small";

export default function Memorize() {
  const [show, setShow] = useState(true);
  const { increment, state: counter } = useCounter(10);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        + 1
      </button>
      <button
        className="btn btn-outline-primary ml-2"
        onClick={() => setShow(!show)}
      >
        Show/Hide <b>{JSON.stringify(show)}</b>
      </button>
    </div>
  );
}
