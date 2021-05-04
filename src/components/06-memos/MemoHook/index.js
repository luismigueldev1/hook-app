import React, { useMemo, useState } from "react";
import { useCounter } from "../../../hooks/useCounter";
import { procesoPesado } from "../../../helpers/procesoPesado";

export default function MemoHook() {
  const [show, setShow] = useState(true);
  const { increment, state: counter } = useCounter(200);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
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
