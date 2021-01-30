import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child";
// Memoization in plain JS
const memoObj = {};
const sumFun = function (x, y) {
  return new Promise((resolve, reject) => {
    console.log(memoObj);
  if (memoObj[x+"+"+y]) {
    console.log(memoObj[x+"+"+y]);
    resolve(memoObj[x+"+"+y]);
  }
    setTimeout(() => {
      let res = x + y;
      memoObj[x+"+"+y] = res;
      resolve(res);
    }, 2000);
  });
};
// end Memoization in plain JS
const Parent = function (props) {
  const [count, setCount] = useState(0);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function increaseByOne() {
    return setCount((c) => c + 1);
  }

  const increase = useCallback(increaseByOne, [input1, input2]);
  console.log("rerendered");
  return (
    <div>
      <p>
        parent Componen :{count}
        <br />
        <input
          type="number"
          onChange={(e) => {
            setInput1(e.target.value);
          }}
        />
        <br />
        <input
          type="number"
          onChange={(e) => {
            setInput2(e.target.value);
          }}
        />
        <button
          onClick={() => {
            sumFun(+input1, +input2).then((res) => setCount(res)); // Applying Memomization in plain JS
          }}
        >
          click me +1
        </button>
      </p>
      {/* <Child count={count} increase={increase} /> */}
    </div>
  );
};
export default Parent;
