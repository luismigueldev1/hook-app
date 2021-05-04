import React from "react";
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

export default function MultipleCustomHooks() {
  const { state: counter, decrement, increment } = useCounter(1);
  const { data, loading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  //*devuelve los campos de un objeto dentro de un array array
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      {error && (
        <div className="alert alert-danger">
          <p>{error.message}</p>
        </div>
      )}

      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success " role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <blockquote className="blockquote text-right">
          <i> {quote}</i>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

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
