import React, { useState, useCallback } from "react";
import Child from "../Child";

export default function Father() {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const increment = (num) => {
  //     setValor(valor + num);
  //   };

  const increment = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Padre</h1>
      <p>Total : {valor}</p>
      <hr />
      <div className="d-flex">
        {numeros.map((n) => (
          <Child key={n} increment={increment} number={n} />
        ))}
      </div>
    </div>
  );
}
