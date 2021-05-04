import React from "react";

function Small({ value }) {
  console.log("Me volvi a llamar :(");
  return <small>{value}</small>;
}

export default React.memo(Small);
