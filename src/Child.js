import React, { memo } from "react";

function Child({ count, increase }) {
  console.log("child component rerenders !");
  return (
    <div>
      <p>child component : {count}</p>
      <button onClick={increase}>click me +1</button>
    </div>
  );
}

export default memo(Child);
    