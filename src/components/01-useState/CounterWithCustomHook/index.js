import React from "react";
import useCounter from "../../../hooks/useCounter";

export default function CounterWithCustomHook() {
  const { decrement, increment, reset, state: counter } = useCounter();
  return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-warning ml-2" onClick={decrement}>
        -1
      </button>
      <button className="btn btn-danger ml-2" onClick={reset}>
        reset
      </button>
    </>
  );
}
