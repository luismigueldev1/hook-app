import { useState } from "react";

export function useCounter(initialState = 10) {
  const [state, setState] = useState(initialState);

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
}
