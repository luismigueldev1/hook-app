import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";
import "./index.css";

export default function LayoutEffect() {
  const { state: counter, decrement, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0]; //*devuelve los campos de un objeto del array

  const pTag = useRef();
  const [tagInfo, setTagInfo] = useState({});

  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
    setTagInfo(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>

      <blockquote className="blockquote text-right">
        <p ref={pTag}>
          <i> {quote}</i>
        </p>
      </blockquote>
      <pre>{JSON.stringify(tagInfo, null, 3)}</pre>

      <div className="text-right mt-2">
        {counter > 1 && (
          <button className="btn btn-secondary" onClick={decrement}>
            Back to previous quote
          </button>
        )}

        <button className="btn btn-primary ml-2" onClick={increment}>
          Get a new quote
        </button>
      </div>
    </div>
  );
}
