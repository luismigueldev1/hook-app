import React, { useState } from "react";

export default function CallbackHook() {
  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>useCallBack Hook</h1>
      <hr />
    </div>
  );
}
